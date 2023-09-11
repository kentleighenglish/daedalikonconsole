var path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

const compression = require('compression');

const app = express()
const conf = require('./site-config.json');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(compression());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/config', express.static(path.join(__dirname, 'config')));
app.use('/src', express.static(path.join(__dirname, 'src')));

// API Routes
app.get('/api/:resource?/:uuid?', (req, res) => {
	var Api = require('api');

	var api = new Api(app, conf);
 	var output = api.request(req, function(response){
		res.end(JSON.stringify(response));
	});
});
app.post('/api/:resource?/:uuid?', upload.array(), (req, res) => {
	var Api = require('api');

	var api = new Api(app, conf);
 	var output = api.request(req, function(response){
		res.end(JSON.stringify(response));
	});
});
app.put('/api/:resource?/:uuid?', upload.array(), (req, res) => {
	var Api = require('api');

	var api = new Api(app, conf);
 	var output = api.request(req, function(response){
		res.end(JSON.stringify(response));
	});
});
app.delete('/api/:resource?/:uuid?', upload.array(), (req, res) => {
	var Api = require('api');

	var api = new Api(app, conf);
 	var output = api.request(req, function(response){
		res.json(response);
	});
});


/**
 * Catch all routes and return the `index.html`
 */
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'view/index.html'));
});

/**
 * Port & host settings
 */
const PORT = process.env.PORT || 3000;
const HOST = process.env.BASE_URL || 'localhost';
const baseUrl = `http://${HOST}:${PORT}`;

app.set('port', PORT);

/**
 * Begin listening
 */
app.listen(app.get('port'), () => {
  console.log(`Express server listening on ${baseUrl}`);
});
