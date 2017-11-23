var express 	= require('express'),
	consign 	= require('consign'),
	bodyParser 	= require('body-parser'),
	app 		= express();

app.use(express.static('./client'));
app.use(bodyParser.json());


consign({cwd: 'backend'})
	.include('models')	
	.then('api')
	.then('routes')
	.into( app );

module.exports = app;