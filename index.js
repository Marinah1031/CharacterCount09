// TODO: Include packages needed for this application
//Installation of the packages used
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//creating an array of questions
const questions = [
    {
        type:'input',
        name: 'title',  // title of project
        message:"What's the title of your project?",
    },
    {
        type: 'input',
        name: "description", //description of the project
        message: `Please provide a description about what you are building.`,
    },
    {
        type: 'list',
        name: 'license',
        message:`Select license`,// licensing with several options
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
        message: 'How to run tests?',//Guide for running tests
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
    {
        type:'input',
        name: 'github',//Username for github is added
        message:"What is your GitHub username?",
    },
    {
        type: 'input',
        name: "email",//Email is asked for future contact
        message: "Enter email address:",
    },
];

// TODO: Create a function to write README file
//a synchronus method that writes data to a file
function writeToFile(fileName, data) {
    //creates the fath to the file by joining the current directory with the specified fileName. 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }
// TODO: Create a function to initialize app
function init() {
    //a series of questions are presented in the array and the questions are passed as an object to the .then() callback.
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('README file is Generating.');
        //the generateMarkdown is used to format the user's responses into a valid format to be written to the file. 
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses}));    })
    }
        // Function call to initialize app
init();
