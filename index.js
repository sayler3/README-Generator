// Declaring dependencies
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
const genrateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project",
	},
	{
		type: "input",
		name: "desciption",
		message: "Please enter a description for your project",
	},
	{
		type: "input",
		name: "installation",
		message: "What are the installation instructions for your projece",
	},
	{
		type: "input",
		name: "usage",
		message: "Enter usage information",
	},
	{
		type: "input",
		name: "contribution",
		message: "Please enter contribution guidelines",
	},
	{
		type: "input",
		name: "testInstruction",
		message: "Please enter test instructions",
	},
	{
		type: "list",
		name: "license",
		message: "Pick a license",
		choices: ["GNU", "Mozilla", "Apache", "MIT"],
	},
	{
		type: "input",
		name: "username",
		message: "What is your GitHub username",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address",
	},
];

// function to write README file
function writeToFile(fileName, data) {
	writeFileAsync(fileName, data, (err) =>
		err
			? console.log(err)
			: console.log("Success" + fileName + "has been generated.")
	);
}

// function to initialize program
function init() {}

// function call to initialize program
init();
