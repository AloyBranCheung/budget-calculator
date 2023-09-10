const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  setupFilesAfterEnv: ["./tests/setupTests.ts"],
};
