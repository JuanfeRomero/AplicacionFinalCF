/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

/**
 * Flag indicating whether webpack compiled for the first time.
 * @type {boolean}
 */
let isInitialCompilation = true;

const compiler = webpack(config);


// SERVER MODIFICADO POR MI
const express = require('express');
const http = require('http');
const engine = require('socket.io');
const port = 3000;
const app = express();

let data = [
  {id: 1, author: "Autor 1", text: "Comentario 1"},
  {id: 2, author: "Autor 2", text: "Comentario 2"}
];

let server = http.createServer(app).listen(port, () =>{
  console.log("esta conectado al port " + port);
})

const io = new engine.Server(server);

io.on('connection', (socket) =>{
  socket.on('read', ()=>{
    console.log("Entró al socket");
    io.emit('data', data);
  });
  socket.on('sign', (sign)=>{
    data.unshift(sign);
    io.emit('data', data);
  })
})
// FIN MODIFICACION MIA

new WebpackDevServer(compiler, config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
});

compiler.plugin('done', () => {
  if (isInitialCompilation) {
    // Ensures that we log after webpack printed its stats (is there a better way?)
    setTimeout(() => {
      console.log('\n✓ The bundle is now ready for serving!\n');
      console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
      console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
      console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
    }, 350);
  }
  isInitialCompilation = false;
});
