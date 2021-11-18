module.exports = {
  "moduleFileExtensions": ["js", "ts",],
  ["moduleNameMapper"]: {
    // These take care of webpack's alias
    ["Components(.*)"]: "<rootDir>/src/client/components",
  },
  // Test files to exclude. Note that node_modules are excluded by default, but
  // because im overwriting the default array, they must be added again.
  testPathIgnorePatterns: ["<rootDir>/src/build/", "<rootDir>/node_modules/"],

  // Transform functions. Any file matching the following regexs will be
  // transpiled **synchronously** with the specified function.
  transform: {
    ["^.+\\.(js|ts)$"]: "<rootDir>/src/build/testBuild/transformer.js"
  },
  testMatch: [
    "**/*.test.(js|ts)"
  ],
  modulePaths: ["<rootDir>/src/client/"]
}