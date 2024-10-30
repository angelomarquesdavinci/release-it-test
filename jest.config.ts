import type { Config } from "jest";

const config: Config = {
  // verbose: true,
  watchPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/src/layer/node_modules/",
    "<rootDir>/src/layer/package.json",
  ],
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  testTimeout: 15000,
};

export default config;
