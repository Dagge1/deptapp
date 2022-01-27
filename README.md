### DEPT SPA app
Created in Visual Studio Code with Vue Vite bundler using Vue 3, Vue Router 4, Option API and Bootstrap 5 customized with custom scss fonts and styles.
App uses fake data from https://randomuser.me/ and is adapted to use on a different screen sizes including mobile phone

### LAUNCH APP  
Install required node modules: npm install  
Start app in dev mode with: npm run dev

If you want to serve app from your own server, for building files run: npm run build (built files are in the /dist folder)

If you want Vite to serve/update front-end while you use your own server (like Node server.js):
in package.json first add --watch flag to scripts > build ("vite build --watch"),
then in CLI use command: npm run build  ..and also start your server from another CLI instance (enable node server to use /dist folder as static):

### Here is the complete Nodejs server side code (with Express):

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(5000, () => console.log('Server started at port 5000'));

Voila!
