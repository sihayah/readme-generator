// TODO: Include packages needed for this application
const inquirer = require('inquirer')


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
        name: 'confirmTestInstruction',
        message: 'Would you like to add test instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'testInstructions',
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
        choices: ['BSD (open source, does not req distribution)', 'MIT (allows commerical use', 'GPL (req open source)']
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Choose technologies used:',
        choices: ['HTML5','CSS3','javaScript', 'jquery', 'bootstrap', 'Node.js', 'npm', 'jest', 'React']
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
            // what to do with the data
            console.table(answers)
        }) .catch ((err) => {
            if (err) {
                console.log(err)
                throw err
            }
        })
}

// Function call to initialize app
init();
