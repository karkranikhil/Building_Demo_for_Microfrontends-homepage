// const express = require('express');
// const server = express();
// const request = require('request');
// const proxy = require('http-proxy-middleware');
//
// server.set('view engine', 'ejs');
//
// const createProxy = (path, target) =>server.use(path, proxy({ target, changeOrigin: true, pathRewrite: {[`^${path}`]: ''} }));
//
// createProxy('/header', 'https://microfrontends-component-one.herokuapp.com/');
// createProxy('/products', 'https://microfrontends-component-two.herokuapp.com/');
// createProxy('/cart', 'https://microfrontends-component-three.herokuapp.com/');
//
// server.get('/', (req, res) => res.render('index'));
//
// const port = process.env.PORT || 8082;
// server.listen(port, () => {
//   console.log(`Homepage listening on port ${port}`);
// });

// const express = require('express');
// const server = express();
// const request = require('request');
//
// server.set('view engine', 'ejs');
//
// server.get('/', (req, res) => res.render('index'));
//
// const port = process.env.PORT || 8081;
// server.listen(port, () => {
//   console.log(`Homepage listening on port ${port}`);
// });

const express = require('express');
const server = express();
const request = require('request');
const proxy = require('http-proxy-middleware');

server.set('view engine', 'ejs');

const createProxy = (path, target) =>
server.use(path, proxy({ target, changeOrigin: true, ignorePath: true }));

createProxy('/header', 'https://microfrontends-component-one.herokuapp.com/');
createProxy('/products-list', 'https://microfrontends-component-two.herokuapp.com/');
createProxy('/cart', 'https://microfrontends-component-three.herokuapp.com/');

server.get('/', (req, res) => res.render('index'));

const port = process.env.PORT || 8085;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});