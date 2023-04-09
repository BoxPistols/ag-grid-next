const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  displayName: "storyshots",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["<rootDir>/src/tests/jest.storyshots.ts"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "mdx", "json"],
  transformIgnorePatterns: [
    "node_modules/(?!(gatsby|gatsby-plugin-mdx)/)",
  ],
};

module.exports = createJestConfig(customJestConfig);
