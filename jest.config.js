module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./node_modules/*",
    "!./webpack/*"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFiles: [
    "./src/common/utils/setup-test-env.ts"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ]
}
