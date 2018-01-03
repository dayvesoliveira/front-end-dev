/* var express 	= require('express'),
	consign 	= require('consign'),
	bodyParser 	= require('body-parser'),
	app 		= express(); 
*/

import express from 'express';
import consign from 'consign';
import bodyParser from 'body-parser';

import userRouter from '../backend/routes/usuarios';
import loginRouter from '../backend/routes/login';

const app = express();

app.use(express.static('./client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', userRouter)
   .use('/api', loginRouter);


consign({cwd: 'backend'})
	.then('api')
	.then('routes')
	.into( app );

export default app;