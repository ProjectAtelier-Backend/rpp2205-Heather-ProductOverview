module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [

    "<rootDir>/db/*.{js,jsx,ts,tsx}",
    "<rootDir>/server/*.{js,jsx,ts,tsx}",
    "<rootDir>/test/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/coverage/",
    "!<rootDir>/package-lock.json/",
    "!<rootDir>/package.json/",
    "!<rootDir>/README.md/"
  ],

}