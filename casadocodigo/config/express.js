import express from 'express';
import load  from 'express-load';

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

load('routes', {cwd: 'app'})
    .then('infra')
    .into(app);

export default app;