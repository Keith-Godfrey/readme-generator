// TODO: Include packages needed for this application
const fs = require("fs");
const genMD = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices.js");

// TODO: Create an array of questions for user input
const questions = [
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your project title?",
        name: "title",
      },
      {
        type: "input",
        message: "Provide a short description of your project.",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install",
      },
      {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "instructions",
      },
      {
        type: "input",
        message: "Were there any collaborators involved in your project?",
        name: "collaborators",
      },
      {
        type: "input",
        message: "How can others contribute to your project?",
        name: "contribute",
      },
      {
        type: "input",
        message: "Provide testing examples for your project.",
        name: "testing",
      },
      {
        type: "list",
        message: "What license is your project operating?",
        name: "license",
        Choices: [
          "MIT License",
          "license:apache-2.0",
          "Creative Commons",
          "unlicense",
          ],
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your site url?",
        name: "url",
      },
    ])

    .then((response) =>
      writeToFile("README - generatedMD", genMD.generateMarkdown(response))
    ),
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error("error occured.", err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    createNewFile("readme, answers");
  });
}

// Function call to initialize app
init();
