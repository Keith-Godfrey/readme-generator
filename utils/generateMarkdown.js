// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
      default:
        return'';
  }
}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  # ${data.title}
  \n ${renderLicenseBadge(data.license)}

  ## Table of Contents
  \n -[Description](#Description)
  \n -[Installation](#Installation)
  \n -[Usage](#Usage)
  \n -[Credits](#Credits)
  \n -[Licenses](#Licenses)
  \n -[Contributions](#Contributions)
  \n -[Testing](#Testing)
  \n -[Site-URL](#Site-URL)
  \n -[Screenshots](#Screenshots)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}
  
  ## License
  This project is licensed under the ${renderLicenseBadge(data.license)} license. Click on the badge above for more information.
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.testing}

  ## Site-URL
  ${data.URL}

  ## Screenshots
  ${''}

  ## Questions?
  Any questions regarding this project can be answered by contacting me through my GitHub Profile at https://github.com/${data.username} or at my email address at ${data.email}. 

  -Thank you

`;
}

module.exports = generateMarkdown;
