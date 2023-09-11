var mysql = require('mysql');

module.exports = function(api, config) {
	module = {
		api: api,
		db: mysql.createConnection(config)
	};

	module.buildQuery = function(query) {
		var queryString = [];
		var fields = [];

		if(query.fields) {
			query.fields.map(function(field){
				fields.push(query.from+'.'+field);
			});
		}

		if(query.statement == 'INSERT INTO') {
			var insertValues = query.values;

			var values = [];
			insertValues.map(function(valObj){
				var valuesArr = [];
				query.fields.map(function(field, index){
					var value = valObj[field];

					if(typeof value == 'string') {
						value = '"'+value+'"';
					}

					valuesArr[index] = value;
				});
				values.push('('+valuesArr.join(', ')+')');
			});
		} else if(query.statement == 'UPDATE') {
			var updateValues = query.values;
			fields = Object.keys(updateValues);

			values = [];
			fields.map(function(field){
				var value = updateValues[field];

				if(typeof value == 'string') {
					value = '"'+value+'"';
				}

				values.push(field+' = '+value);
			});
		}

		var conditionsArray = [];
		if(query.conditions) {
			conditionsArray = query.conditions;
		}

		var joins = [];
		if(query.join) {
			joinTables = Object.keys(query.join);
			joinTables.map(function(joinTable){
				var join = query.join[joinTable];
				var joinString = '';
				if(join.on && join.match && join.type) {
					joinString += join.type+' JOIN '+joinTable+' ON ';

					matchTable = join.matchTable || query.from;
					joinString += joinTable+'.'+join.on+' = '+matchTable+'.'+join.match;

					joins.push(joinString);

					if(join.fields) {
						join.fields.map(function(field){
							fields.push(joinTable+'.'+field+' AS '+joinTable+'_'+field);
						});
					}

					if(join.conditions) {
						conditionsArray = conditionsArray.concat(join.conditions);
					}
				}
			});
		}

		var conds = [];
		if(conditionsArray.length) {
			conditionsArray.map(function(conditionSet){
				var set = [];
				conditionSet.map(function(cond) {
					var table = cond.table || query.from;
					var type = cond.type || 0;
					if(type == 0) {
						var condString = table+'.'+cond.field+' = "'+cond.value+'"';
					} else {
						var condString = table+'.'+cond.field+' LIKE "%'+cond.value+'%"';
					}
					set.push(condString);
				});
				conds.push('('+set.join(' OR ')+')');
			});
		}

		var conditions = conds.join(' AND ');

		queryString.push(query.statement);
		if(query.statement == 'SELECT') {
			if(fields.length) {
				queryString.push(fields.join(', '));
			} else {
				queryString.push('*');
			}
			queryString.push('FROM');
			queryString.push(query.from);
			if(joins.length) {
				queryString.push(joins.join(' '));
			}
			if(conditions.length) {
				queryString.push('WHERE');
				queryString.push(conditions);
			}
			if(query.limit) {
				queryString.push('LIMIT '+query.limit);
			}
			if(query.offset) {
				queryString.push('OFFSET '+query.offset);
			}
		} else if (query.statement == 'UPDATE') {
			queryString.push(query.from);
			queryString.push('SET');
			queryString.push(values.join(', '));
			if(conditions.length) {
				queryString.push('WHERE');
				queryString.push(conditions);
			}
		} else if(query.statement == 'DELETE') {
			queryString.push('FROM');
			queryString.push(query.from);
			try {
				queryString.push('WHERE');
				queryString.push(conditions);
			} catch(e) {
				throw ('WHERE is required for DELETE sql action');
			}
		} else if (query.statement == 'INSERT INTO') {
			queryString.push(query.from);
			queryString.push('('+fields.join(', ')+')');
			queryString.push('VALUES');
			queryString.push(values.join(', '));

		}

		return queryString.join(' ')+';';
	}

	module.execute = function(queryString, callback) {
		var response = null;

		try {
			// module.db.connect();
			module.db.query(queryString, function(error, res){
				if(error) throw error;
				response = res;
				callback(response);
			});

		} catch(e) {
			module.api.throw(e, true);
		}
	}

	return module;
}
