const fs = require('fs')

let licenseBadge
let licenseLink
let technologiesBadges = []

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (data) {
  if (data.license == 'MIT'){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (data.license == 'Apache') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

  else if (data.license == 'GPL'){
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
}
  else {
    licenseBadge = ''
  }
  console.log(licenseBadge)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (data) {
  if (data.license == 'MIT'){
    licenseLink = `(https://opensource.org/licenses/MIT)`
  }
  else if (data.license == 'Apache') {
    licenseLink = `(http://www.apache.org/licenses/LICENSE-2.0)`
  }

  else if (data.license == 'GPL'){
  licenseLink = `(https://www.gnu.org/licenses/gpl-3.0.en.html)`
}
  else {
    licenseLink = ''
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (data) {
  renderLicenseBadge(data)
  renderLicenseLink(data)

  console.log(licenseBadge, licenseLink)

  if (!data.license){
    return ''
  }
  return `

  ## License

  ---

  ${licenseBadge} 
  <br>
  [click her for more information about ${data.license} license.]${licenseLink}
  `
}

function renderRelativeLicenseLink (data) {
  if (!data.license) {
    return ''
  }
  return `
  [License](##License) \*`
}


// function to return technology badges based on user selection
function renderTechnologyBadge(data) {

  if(data.technologies.indexOf('HTML5')) {
    technologiesBadges.push(`[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]`)
  }
  if(data.technologies.indexOf('CSS')) {
    technologiesBadges.push(`[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]`)
  }
  if (data.technologies.indexOf('javaScript')) {
    technologiesBadges.push((`[![javaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]`))
  }
  if (data.technologies.indexOf('jquery')){
    technologiesBadges.push(`[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)]`)
  }
  if (data.technologies.indexOf('bootstrap')){
    technologiesBadges.push(`[![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)]`)
  }
  if (data.technologies.indexOf('Node.js')){
    technologiesBadges.push(`[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)]`)
  }
  if (data.technologies.indexOf('NPM')){
    technologiesBadges.push(`[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)]`)
  }
  if (data.technologies.indexOf('Jest')){
    technologiesBadges.push(`[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)]`)
  }
  if (data.technologies.indexOf('React')){
    technologiesBadges.push(`[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]`)
  }
  
}

function renderTechnologiesSection(data) {
    renderTechnologyBadge(data)
}
// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.title}

  
  [Description](##Description) \*
  [Installation](##Installation) \*
  [Usage](##Usage) \*
  [Contributions](##Contributions) \*
  [Tests](##Tests) \*
  [Questions](##questions) \*
  ${renderRelativeLicenseLink(data)}
  // [Technologies](##technologies)
  
  <br>

  ## Description 

  ---

  ${data.description}
  Deployment: (${data.deploymentLink})
  Repo: (${data.repoLink})
  ## Installation
  ${data.installation}

  <br>

  ## Usage

  ---

  ${data.usage}

  <br>

  ## Contributions

  ---

  ${data.contribution}

  <br>

  ## Tests

  ---

  ${data.tests}

  <br>

  ## Questions

  ---

  For any further inquiries, please contact me via [gitHub](${data.gitHub}) or email: ${data.email}

  <br>

  ${renderLicenseSection(data)}

  <br>
  <br>
  ## Technologies

  ---
  // ${renderTechnologiesSection(data)}
`;
}
  


// writeFile(generateMarkdown(readmeData))


module.exports = generateMarkdown;
