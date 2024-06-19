// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licBadge = "";
  switch (license) {
    case "Mozilla Public License 2.0":
      licBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license)})`;
      break;
    case "Apache License 2.0":
      licBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    case "MIT License":
      licBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(
        license
      )})`;
      break;
    case "The Unlicense":
      licBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${renderLicenseLink(
        license
      )})`;
      break;
  }
  return licBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licLink = "";
  switch (license) {
    case "Mozilla Public License 2.0":
      licLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Apache License 2.0":
      licLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "MIT License":
      licLink = "https://opensource.org/licenses/MIT";
      break;
    case "The Unlicense":
      licLink = "http://unlicense.org/";
      break;
  }
  return licLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is operating under the following license: **${license}**.  
\n\nFurther information regarding this license, to include the required notice, can be read by navigating to the following link: ${renderLicenseLink(license)}.`;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
 
  ${data.description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
 
  ## Installation
   ${data.installation}
  
   ## Usage
    ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.testing}

  // ## Questions
  // Any questions regarding this project can be answered by contacting me through my GitHub profile or by email:
  // \nGitHub Profile: https://github.com/${data.ghUsername}
  // \nemail: ${data.email}`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
