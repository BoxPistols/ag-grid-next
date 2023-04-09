const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  displayName: 'storyshots',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // '\\.mdx?$': '<rootDir/__mocks__/mdxMock.js',
    '\\.mdx?$': '<rootDir>src/tests/mock.ts',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/tests/jest.storyshots.ts'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
    // "^.+\\.jsx?$": "babel-jest",
    // "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
    //   "^.+\\.tsx?$": "babel-jest",
    //   "^.+\\.mdx$": "babel-jest",
  },
  // testPathIgnorePatterns: ["\\.mdx$"], // この行を追加
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-plugin-mdx)/)'],
}

module.exports = createJestConfig(customJestConfig)
