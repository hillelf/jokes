const proxy = require('http-proxy-middleware');

module.exports = function (app){
  app.use(
    '/api',
    proxy({
      "target": 'https://www.poemist.com',
      "changeOrigin": true,
      "cookieDomainRewrite": "localhost",
      "secure": false,
      "headers": {
             "host": "www.poemist.com",
             "origin": null
         },
      "onProxyReq": function(proxyReq, req, res) {
             proxyReq.setHeader('accept-encoding', 'identity')
         },
    })
  );
};


