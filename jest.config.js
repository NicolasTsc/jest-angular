var preset = require("jest-preset-angular/jest-preset");
module.exports = {
  ...preset,
  testEnvironment: 'jsdom',
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ["**/*.spec.ts"],
  globals: {
    ...preset.globals,
    "ts-jest": {
      ...preset.globals["ts-jest"],
      tsConfig: "src/tsconfig.test.json",
      isolatedModules: true
    }
  }
};
