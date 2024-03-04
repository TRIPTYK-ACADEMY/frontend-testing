import { defineConfig } from 'cypress';
import { lighthouse, prepareAudit } from "@cypress-audit/lighthouse";

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200',
    experimentalStudio: true,
    taskTimeout: 120 * 1000,
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse()
      });
    },
  },
})
