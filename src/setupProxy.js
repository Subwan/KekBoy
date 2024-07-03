const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      pathFilter: '/api',
      target: 'https://timeapi.io',
      changeOrigin: true,
    }),
  );
};
