module.exports = {
  default: {
    require: [
      "features/step_definitions/login_steps.js",
      "features/step_definitions/dataInput_steps.js",
      "features/step_definitions/hooks.js",
      "features/support/*.js",
    ],
    format: ["progress", "json:reports/cucumber-report.json"],
    paths: ["features/**/*.feature"],
    timeout: 30000,
  },
};
