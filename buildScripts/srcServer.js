// While import is indeed part of ES6,
// it is unfortunately not yet supported in NodeJS by default, and has only very recently landed support in browsers.
// to use ES6 imports in this kit, we have to use "babel-node" to transpile as mentioned in "npm start" to run application.

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

// const express 	= require('express');
// const webpack	= require('webpack');
// const path		= require('path');
// const config	= require('../webpack.config.dev');
// const open 		= require('open');

/* eslint-disable no-console */  // added to remove lint warnings

const port = 3000;
const app = express();
const compiler = webpack(config); // get reference to webpack compiler

// tell express to use 'webpack-dev-middleware' and pass the compiler.
// with this we integrate webpack with express.
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
