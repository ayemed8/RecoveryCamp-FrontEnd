

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4005",
      changeOrigin: false,
    })
  );

  app.use(
    "/viewer-stone",
    createProxyMiddleware({
      target: "http://localhost:4005",
      changeOrigin: false,
    })
  );

  app.use(
    "/viewer-ohif",
    createProxyMiddleware({
      target: "http://localhost:4005",
      changeOrigin: false,
    })
  );
};
