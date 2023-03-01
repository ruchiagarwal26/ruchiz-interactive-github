// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
console.log('Hi, welcome to Readme genrating website');
console.log("please answer the questions below to add to your project's Readme");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
 const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description about your project: ',
      name: 'Description',
    },
    {
        type: 'checkbox',
        message: 'Please select the license requirements for this project',
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: 'License',
      },
      {
        type: 'input',
        message:'Technical requirements for this project : ',
        name: 'Usage',
      },
      {
        type: 'input',
        message:'What are the steps required to install your project? ',
        name: 'Installation',
      },
      {
        type: 'input',
        message:"If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
        name: 'Contributing',
      },
      {
        type: 'input',
        message:"Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
        name: 'Tests',
      },
      {
        type: 'input',
        message:"Please add any open questions you may have",
        name: 'Questions',
      },
      {
        type: 'input',
        message:"Please add your github name",
        name: 'github name',
      },
      {
        type: 'input',
        message:"Please add your email",
        name: 'email',
      }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log ("README.md")
    });
}

const writeResponse = util.promisify(writeToFile)
console.log("writeResponse", writeResponse);

// TODO: Create a function to initialize app
async function init() {
const userResponse = await inquirer.prompt(questions);
console.log("userResponse: ", userResponse);
const markdown = generateMarkdown(userResponse);
console.log("markdown: ", markdown);
await writeResponse ('README.md', markdown)
}

// Function call to initialize app
init();

