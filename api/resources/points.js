
module.exports = function (api) {
    var module = {
		api: api
	};

    module.GET = function () {
		var queryData = {
			statement: 'SELECT',
			from: 'points',
			fields: '*',
			conditions: []
		};

		if(module.api.params.uuid) {
			uuid = module.api.params.uuid;

			queryData.conditions.push([
				{
					field: 'uuid',
					value: uuid
				}
			]);
			queryData.limit = 1;
		}

		var query = module.api.db.buildQuery(queryData);

		module.api.db.execute(query, function(result){
			if(result) {
				module.api.response.success = true;
				if(module.api.params.uuid) {
					module.api.response.data = result[0];
				} else {
					module.api.response.data = result;
				}
				module.api.respond();
			} else {
				module.api.throw('No results found');
				module.api.respond();
			}
		});
    };

	module.POST = function(data, constellation_uuid, callback) {
		var inputPoints = data || module.api.data;
		inputPoints.map(function(p, index) {
			p.uuid = module.api.uuid.v1();
			p.constellation_uuid = constellation_uuid;
		});

		console.log(inputPoints);

		var queryData = {
			statement: 'INSERT INTO',
			from: 'points',
			fields: [
				'uuid',
				'constellation_uuid',
				'x',
				'y',
				'z',
				'name'
			],
			values: inputPoints
		};

		var query = module.api.db.buildQuery(queryData);

		console.log(query);

		module.api.db.execute(query, function(result){
			response = [];
			if(result) {
				response = result;
			} else {
				module.api.throw('Unable to create points');
			}
			callback(response);
		});
	}

	module.getByConstellation = function(constellation_uuid, callback) {
		if(constellation_uuid) {
			var queryData = {
				statement: 'SELECT',
				from: 'points',
				conditions: [
					[
						{
							field: 'constellation_uuid',
							value: constellation_uuid
						}
					]
				]
			};

			var query = module.api.db.buildQuery(queryData);

			module.api.db.execute(query, function(result){
				response = [];
				if(result) {
					response = result;
				}
				callback(response);
			});
		}
	}

    return module;
};
