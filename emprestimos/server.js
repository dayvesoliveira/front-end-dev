var http    = require('http'),
    app     = require('./config/express'),
    session = require('express-session'),
    helmet  = require('helmet');

// conexao com o banco
require('./config/database')('localhost/emprestimos'); 
/*
Invasores podem utilizar este cabeçalho (que fica ativado por padrão) para detectar aplicativos executando 
o Express e então iniciar ataques especificamente direcionados a eles.
Portanto, a melhor prática é desligar o cabeçalho com o método app.disable():
*/
app.disable('x-powered-by');

// Use Helmet: pode ajudar a proteger o seu aplicativo de algumas vulnerabilidades da web bastante conhecidas configurando os 
// cabeçalhos HTTP adequadamente. O Helmet é na realidade apenas uma coleção de nove funções de middlewares menores que configuram 
// cabeçalhos HTTP relacionados à segurança:
// $ npm install --save helmet

app.use(helmet());

// Use cookies de maneira segura
// Não use o nome do cookie da sessão padrão

app.set('trust proxy', 1) // trust first proxy
app.use( session({
    secret : 's3Cur3',
    name : 'sessionId',
    proxy: true,
    resave: true,
    saveUninitialized: true
   })
 );

// Configure as opções de segurança de cookie
// Aqui está um exemplo usando o middleware cookie-session:
var cookiesession = require('cookie-session');
var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
app.use(cookiesession({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: { secure: true,
            httpOnly: true,
            domain: 'example.com',
            path: 'foo/bar',
            expires: expiryDate
          }
  })
);


// Assegure que suas dependências sejam seguras
// Usar o npm para gerenciar as dependências do aplicativo é poderoso e conveniente. 
// Mas os pacotes utilizados podem conter vulnerabilidades críticas de segurança que poderiam afetar também o seu aplicativo. 
// A segurança do seu aplicativo é tão forte quanto o “elo mais fraco” em suas dependências.

/* Use uma ou ambas das duas seguintes ferramentas para auxiliá-lo a assegurar a segurança de pacotes de terceiros utilizados 
   por você: nsp e requireSafe. Essas duas ferramentas fazem em grande parte a mesma coisa.
   nsp é uma ferramenta de linha de comandos que verifica o banco de dados de vulnerabilidades do Node Security Project para 
   determinar se o seu aplicativo utiliza pacotes com vulnerabilidades conhecidas. 
   
   Instale-a como segue:
   $ npm i nsp -g

   - Use este comando para enviar o arquivo npm-shrinkwrap.json para validação para o nodesecurity.io:
   $ nsp audit-shrinkwrap

   - Use este comando para enviar o arquivo package.json para validação para o nodesecurity.io:
   $ nsp audit-package
   
   - Aqui está como usar o requireSafe para auditar seus módulos Node:
   $ npm install -g requiresafe
   $ cd your-app
   $ requiresafe check

   @see https://blog.risingstack.com/node-js-security-checklist/
*/

http.createServer(app)
    .listen(3000, function() {
        console.log('Servidor iniciado');
    });