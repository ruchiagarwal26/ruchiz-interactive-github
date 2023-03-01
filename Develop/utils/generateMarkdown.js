// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
    license
  )})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ``;
  }
  if (license === "MIT") {
    return `https://img.shields.io/badge/License-MIT-yellow.svg`;
  }
  if (license === "GNU General Public License 2.0") {
    return `https://img.shields.io/badge/License-GPL_v2-blue.svg`;
  }
  if (license === "Apache License 2.0") {
    return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
  }
  if (license === "GNU General Public License 3.0") {
    return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!`${license}`) {
    return ` `;
  } else {
    return `${license} license is used in this project`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.licenses)}

## Table of Contents:
* [Description](#description)
* [License](#license)
* [Usage](#usage)  
* [Installation](#installation)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.Description} 
## Usage
${data.Usage}
## License
${renderLicenseSection(data.License)}
## Installation
${data.Installation}
## Contributing
${data.Contributing}
## Tests
${data.Tests}
## Questions
${data.Questions}

My GitHub: https://github.com/${data.github}  
For additional questions, please reach out to me at my email: ${data.email} 
`;
}

module.exports = generateMarkdown;
