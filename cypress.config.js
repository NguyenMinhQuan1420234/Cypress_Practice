/// <reference types="Cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //DEFAULT CONFIGURATION
  defaultCommandTimeout: 3000,
  //e2e options
  e2e: {
    baseUrl: "http://192.168.237.10:3000/#!/login",
    projectId: "wmbmub",
    specPattern: "**/*.cy.js",
    chromeWebSecurity: false,
    video: false,
    watchForFileChanges: false,
  },
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },
  //env options
  env:{
    apiUrl: "http://192.168.237.10:3000/#!/login",
  },
});
