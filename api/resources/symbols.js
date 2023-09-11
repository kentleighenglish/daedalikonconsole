
module.exports = function (api) {
    var module = {
		api: api,
		points: require('./points.js')
	};

    module.GET = function () {
		var queryData = {
			statement: 'SELECT',
			from: 'symbols',
			fields: ['*'],
			conditions: [],
			join: {
				constellations: {
					type: 'LEFT',
					on: 'uuid',
					match: 'constellation_uuid',
					fields: [
						'name'
					]
				}
			}
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

	module.POST = function(data) {
		var inputConstellation = data || module.api.data;
		var uuid = module.api.uuid.v1();

		var symbol = {
			uuid: uuid,
			name: inputConstellation.name,
			code: inputConstellation.code
		}

		var queryData = {
			statement: 'INSERT INTO',
			from: 'constellations',
			fields: [
				'uuid',
				'name',
				'code'
			],
			values: [
				constellation
			]
		};

		var query = module.api.db.buildQuery(queryData);

		module.api.db.execute(query, function(result){
			if(result) {
				var response = constellation;

				var points = new module.points(module.api);

				points.POST(inputConstellation.points, uuid, function(res){
					module.api.response.success = true;
					module.api.response.data = response;
					module.api.respond();
				}.bind(this, module));
			} else {
				module.api.throw('Unable to create constellation');
				module.api.respond();
			}
		});
	}

    return module;
};
