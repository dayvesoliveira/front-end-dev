var express 	= require('express'),
	consign 	= require('consign'),
	bodyParser 	= require('body-parser'),
	app 		= express();

app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


consign({cwd: 'backend'})
	.then('api')
	.then('routes')
	.into( app );

module.exports = app;