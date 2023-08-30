//Made a function that returns a license badge 
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub Liscense](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  //returning an empty string
  return '';
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Define a mapping of license names to their URLs
  const licenseUrls = {
      // The licenses links as needed
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html ',
      'BDS 3' : 'https://opensource.org/license/bsd-3-clause/ ',
      'NONE' : ''
  }

  // Check if the license is in the mapping
  if (license && licenseUrls.hasOwnProperty(license)) {
      return licenseUrls[license];
  } else {
      return ''; // Return an empty string if the license is not found or undefined
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if (license !== 'None') {
//returns the license section of README
const licenseTexts = {
  'MIT': `
  MIT License
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  `,
  'Apache 2.0': `
  Apache License 2.0
  
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)

  `,
  'GPL 3.0': `
  GNU General Public License v3.0
  
  [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

  `,
  'BDS 3': `
  BSD 3-Clause License
  
  [![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

  `,
  'NONE': ''

}
//This line checks whether the license variable is defined 
//(not null, undefined, or an empty string) 
//and if the licenseTexts object has a property corresponding to the provided license.
if (license && licenseTexts.hasOwnProperty(license)) {
  //returning the license as a string
  return licenseTexts[license];
} else {
  return '';
}

};

//The triple backticks are used to create code blocks, displaying code in the monospaced font while 
//preserving the format
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation Guide

For installation of dependencies, use the command below.

\`\`\`
${data.installation}
\`\`\`

## Usage Information

${data.usage}
${renderLicenseSection(data.license)}

## Contributing Guidelines

${data.contribution}

## Tests

For running tests, use the command below.

\`\`\`
${data.test}
\`\`\`

## Questions

For further questions regarding the repository, create an issue or contact me at: ${data.email
}. You can find more of my work on GitHub here: ${data.github} (https://github.com/${data.github} /).
`;
}

module.exports = generateMarkdown;
