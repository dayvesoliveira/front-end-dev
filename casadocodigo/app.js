import http from 'http';
import app from './config/express';
import routeProdutos from './app/routes/produtos';

app.server = http.createServer(routeProdutos(app));
app.server.listen(3000, () =>console.log(`Started on port ${app.server.address().port}`));

/* app.server.listen(process.env.PORT, () => {
    console.log(`Started on port ${app.server.address().port}`);
}); */

export default app;
