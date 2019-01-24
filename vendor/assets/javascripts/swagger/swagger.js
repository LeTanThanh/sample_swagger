window.onload = function() {
  // Begin Swagger UI call region
  const ui = SwaggerUIBundle({
    urls: [{
      url: "/api_docs/v1/swagger.yaml",
      name: "API V1"
    }, {
      url: "/api_docs/v2/swagger.yaml",
      name: "API V2"
    }],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });
  // End Swagger UI call region
  window.ui = ui
};
