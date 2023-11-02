const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // This should match the prefix used in your axios request in api.js
    createProxyMiddleware({
      target: "https://doa-doa-api-ahmadramadhan.fly.dev",
      changeOrigin: true,
    })
  );
};
