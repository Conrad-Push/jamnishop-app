const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    // baseUrl: "https://jamnishop.web.app/",
    baseUrl: "http://localhost:5173/",
    reporter: "cypress-mochawesome-reporter",
    screenshotsFolder: "cypres/reports/screenshots",
    reporterOptions: {
      mochaFile: "results/cypress-report-[hash].xml",
      toConsole: true,
    },
    video: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
