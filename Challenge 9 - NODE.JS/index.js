// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide the short description of your project',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'Waht was your motivation?',
  },
  {
    type: 'input',
    name: 'purpose',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can we install the project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can the project be used?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List you collaborators',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a licencse',
    choices: ['MIT', 'Mozilla', 'ISC', 'IBM', 'none'],
  },
  {
    type: 'input',
    name: 'features',
    message: 'Enter features of your project',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can someone contribute in this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write down tests for your application.',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('README file created successfully');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
