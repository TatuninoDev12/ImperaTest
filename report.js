const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber-report.json",
  output: "reports/cucumber-report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "0.1.1",
    "Test Environment": "Test",
    Browser: "Chrome  132.0.6834.111",
    Platform: "MacOS",
    Parallel: "Scenarios",
  },
  failedSummaryReport: true,
  screenshotsDirectory: "screenshots/",
  storeScreenshots: true,
  noInlineScreenshots: true,
};

reporter.generate(options);
