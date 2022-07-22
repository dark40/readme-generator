// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const renderLicenseLink = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github_name',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project_name',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'dependency',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run test?',
            default: 'npm run test',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?',
        },

    ])
};

// Create a function to write README file
const writeToFile = ({github_name, email, project_name, description, license, dependency, test, usage, contribution}) =>
`# ${project_name}

${renderLicenseLink(license)}

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: 


${"```\n" + dependency + "\n```"}


## Usage

${usage}

## License

This project is licensed under the ${license} license.

## Contributing

${contribution}

## Tests

To run tests, run the following command: 


${"```\n" + test + "\n```"}
 

## Questions 

If you have any question about the repo, open an issue or contact directly at ${email}. You can find more of my work at [${github_name}](https://github.com/${github_name}).

`;


// Create a function to initialize app
const init = () => {
    questions()
    .then((answer) => fs.writeFileSync('README.md',writeToFile(answer)))
    .then(() => console.log('Generating README...'))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();
