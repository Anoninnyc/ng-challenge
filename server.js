const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const pathToStaticDir = __dirname + '/client/public/index.html';
const port = process.env.PORT || 3000;
const server = http.createServer(app);

////////
//Middleware
///////////////
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/Public'));


app.get('*', (req, res) => {
  res.status(200).sendFile(pathToStaticDir);
});

/* Kick off server */
server.listen(port, () => {
  console.log('Listening on port', port);
});
