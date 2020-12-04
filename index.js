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
		name: "description",
        message: "Please enter a description for your project",
        
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

// function to write README file
function writeToFile(fileName, data) {
	writeFileAsync(fileName, data, (err) =>
		err
			? console.log(err)
			: console.log("Success! " + fileName + " has been generated.")
	);
}

// function to initialize program
async function init() {
    try{
        // Prompt for questions
        const userInput = await inquirer.prompt(questions);
        // Pass response to generateMarkdown function
        const markdownData = genrateMarkdown(userInput);
        // give fileName a value
        let fileName = "README.md";
        // write file after reciving data
        await writeToFile(fileName, markdownData);
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
