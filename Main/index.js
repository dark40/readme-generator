// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run test?',
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

// TODO: Create a function to write README file
const writeToFile = ({github_name, email, project_name, description, license, dependency, test, usage, contribution}) =>
`# ${project_name}

${license}

## Description

${description}

## Table of Contents

    * Installation
    * Usage 
    * License
    * Contribution
    * Tests
    * Questions

## Installation

To install necessary dependencies, run the following command: 

${dependency}

## Usage

${usage}

## License

This project is licensed under the ${license}.


## Contributing

${contribution}

## Tests

To run tests, run the following command: 

```sh
${test}
```

## Questions 

If you have any question about the repo, open an issue or contact directly at ${email}. You can find more of my work at ${github_name}.

`;


// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answer) => fs.writeFileSync('README.md',writeToFile(answer)))
    .then(() => console.log('Generating README...'))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();
