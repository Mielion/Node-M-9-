// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license == "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if(license == "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license == "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "MIT") {
    return `[License](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license == "Mozilla") {
    return `[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
  } else if(license == "ISC") {
    return `[License: ISC](https://opensource.org/licenses/ISC)`
  } else if (license == "IBM") {
    return `[License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `This project is licensed under the ${license} license. For more information, refer to ${renderLicenseLink(license)}`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ${data.description}

- What was your motivation?
${data.motivation}

- Why did you build this project?
${data.purpose}

- What problem does it solve?
${data.problem}

- What did you learn?
${data.learn}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}

## Badges
${renderLicenseBadge(data.license)}

## Features
${data.features}

## How to Contribute
${data.contribute}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
