// Declaring dependencies
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
const genrateMarkdown = require("./utils/generateMarkdown");

// array of questions for user prompt
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your project",
		validate: valInput,
	},
	{
		type: "input",
		name: "description",
		message: "Please enter a description for your project",
		validate: valInput,
	},
	{
		type: "input",
		name: "installation",
		message: "What are the installation instructions for your project",
		default: "N/A",
	},
	{
		type: "input",
		name: "usage",
		message: "Enter usage information",
		validate: valInput,
	},
	{
		type: "input",
		name: "contribution",
		message: "Please enter contribution guidelines",
		validate: valInput,
	},
	{
		type: "input",
		name: "testInstruction",
		message: "Please enter test instructions",
		default: "N/A",
	},
	{
		type: "list",
		name: "license",
		message: "Pick a license",
		choices: ["GNU", "Mozilla", "Apache", "MIT"],
		default: "MIT",
	},
	{
		type: "input",
		name: "username",
		message: "What is your GitHub username",
		default: "sayler3",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address",
		default: "s.ayler@me.com",
	},
];

// function to write README.md file
function writeToFile(fileName, data) {
	writeFileAsync(fileName, data, (err) =>
		err
			? console.log(err)
			: console.log("Success! " + fileName + " has been generated.")
	);
};

// function to initialize program
async function init() {
	try {
		// Prompt for questions
		const userInput = await inquirer.prompt(questions);
		// Pass user response to generateMarkdown function
		const markdownData = genrateMarkdown(userInput);
		// give fileName a value for markDown file
		let fileName = "README.md";
		// write file after reciving fileName and data
		await writeToFile(fileName, markdownData);
	} catch (err) {
        // If an error accurs display that error
		console.log(err);
	}
};

// funtion to validate if the user has answered the question being prompted
function valInput(input) {
	if (input.trim() === "") {
		console.log("Please add some text to answer the question");
	} else {
		return true;
	}
};

// function call to initialize program
init();
