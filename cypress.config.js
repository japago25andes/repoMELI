const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.mercadolibre.com',
    experimentalSessionAndOrigin: true,          
    screenshotsFolder: 'cypress/results/screenshots',
    videosFolder:      'cypress/results/videos',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
