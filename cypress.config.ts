import { defineConfig } from "cypress";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
