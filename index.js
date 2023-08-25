// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'github',
        message:"What is your GitHub username?",
    },
    {
        type: 'input',
        name: "email",
        message: "Enter email address:",
    },
    {
        type:'input',
        name: 'title',  // title of project
        message:"What's the title of your project?",
    },
    {
        type: 'input',
        name: "description",
        message: `Please provide a description about what you are building.`,
    },
    {
        type: 'list',
        name: 'license',
        message:`Select license`,
        choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BDS 3', 'NONE'],
    },
    {
        type:'input',
        name: 'installation',   //installation instructions
        message: 'How do I install it?',
        default: 'npm i'
    },
    {
        type:'input',
        name: 'test',
        message: 'How to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',    // usage information
        message: 'What does the user need to know about the repository?:',
    },
    {
        type: 'input',
        name: 'contributing',     /// contribution guidelines
        message: 'Who contributed to this project:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating Readme...');
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses}));    })
    }
        // Function call to initialize app
init();
