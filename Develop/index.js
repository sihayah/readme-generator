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
                console.log ('Pleaser enter the title of your project.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please, describe your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log ('Pleaser enter a descritpion of your project.')
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to add installation instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe installation process:',
        when:({ confirmInstallation }) => {
            if(confirmInstallation) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to add usage information?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the intended usage of this project:',
        when:({ confirmUsage }) => {
            if(confirmUsage) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to add contribution guidelines?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Describe the contribution guidelines for this project:',
        when:({ confirmContribution }) => {
            if(confirmContribution) {
                return true
            } else {
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTestInstructions',
        message: 'Would you like to add test instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the test instructions for this project:',
        when:({ confirmTestInstructions }) => {
            if(confirmTestInstructions) {
                return true
            } else {
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
    // {
    //     type: 'checkbox',
    //     name: 'technologies',
    //     message: 'Choose technologies used:',
    //     choices: ['HTML5','CSS','javaScript', 'jquery', 'bootstrap', 'Node.js', 'npm', 'jest', 'React']
    // },
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
