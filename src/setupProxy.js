const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      pathFilter: '/timeapi',
      target: 'https://timeapi.io',
      changeOrigin: true,
      pathRewrite: {
        '^/timeapi': '', // Remove the '/api' prefix
      },
    }),
  );
};
