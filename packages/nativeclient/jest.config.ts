export default {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/__tests__/styleMock.js",
  },
};
