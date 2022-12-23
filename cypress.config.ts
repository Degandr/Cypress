import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setupNodeEvents(on, config) {},
  },
});
