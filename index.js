// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
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
        choices: ["Mozilla","Apache","MIT","unlicense"],
        name: "license",
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
      {
        type: "confirm",
        message: "Would you like to add screenshots?",
        name: "screenshot", 
      }
];


// TODO: Create a function to write README file
      function writeToFile(fileName, data) {
        fs.writeFile('README.md', data, (err) =>
            err ? console.error(err) : console.log(`${fileName} has been generated successfully!`)
    );
    }



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
      .then((answers) => {
          const markdownContent = generateMarkdown(answers);
          writeToFile('README.md', markdownContent);
      })
      .catch((error) => {
          console.error("Error occurred:", error);
      });
};



// Function call to initialize app
init();
