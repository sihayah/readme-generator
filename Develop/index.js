// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    // questions objects
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log ('Please enter the title of your project.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'image',
        message: 'Please enter link to project screenshot:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please, describe your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log ('Please enter a descritpion of your project.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe installation process:',
        validate: installationInput => {
            if (installationInput) {
                return true
            } else {
                console.log ('Please describe the installation of your project.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true
            } else {
                console.log ('Please describe the intended usage of your project.')
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'contribution',
        message: 'Would you like others to contribute to this project?'
    },
    {
        type: 'input',
        name: 'contributionDescription',
        message: 'Describe the contribution guidelines for this project:',
        validate: contributionInput => {
            if (contributionInput) {
                return true
            } else {
                console.log ('Please describe the contribution guidelines of your project.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how to run tests for this project:',
        validate: testsInput => {
            if (testsInput) {
                return true
            } else {
                console.log ('Please describe the test process for your project.')
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose license:',
        choices: ['Apache', 'MIT', 'GPL']
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Choose technologies used:',
        choices: ['HTML5','CSS','javaScript', 'jquery', 'bootstrap', 'Node.js', 'npm', 'jest', 'React']
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter gitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true
            } else {
                console.log ('Pleaser enter gitHub username.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter e-mail address:'
    },
    {
        type: 'input',
        name: 'deploymentLink',
        message: 'Enter deploment link:'
    },
    {
        type: 'input',
        name: 'repoLink',
        message: 'Enter repo link:'
    }

]

// TODO: Create a function to write README file
const writeFile = (fileName, fileContent) => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./readme.md', fileContent, err => {
          if (err) {
              reject(err)
              return
          } 
          resolve({
              ok: true,
              message: 'File created!'
          })
      })
  })
}

// TODO: Create a function to initialize app
function init() {

    promptUser = data => {
        console.log(`
        ===================
        create a New readme
        ===================
        `)
        return inquirer.prompt(questions)
        .then(readmeData=> {
                // what to do with the data
            return readmeData
            }) .catch ((err) => {
                if (err) {
                    console.log(err)
                    throw err
                }
        })

    }
    promptUser()
        .then (readmeData => {
            console.log(readmeData)
            writeFile(readmeData.title, generateMarkdown(readmeData))
            console.log("Read me has been created.")
        })
        
        // .then(readmeData, readmeDataArr => {
        //     console.log(readmeData)
        // //     return writeToFile(readmeDataArr.title, readmeDataArr)
        // //     console.log(writeFileResponse)
        // })
}


// Function call to initialize app
init()
