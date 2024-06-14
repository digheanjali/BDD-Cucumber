const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  env: {
    "TAGS": "@smoke"
  },
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      // implement node event listeners here
    },
  },
});
