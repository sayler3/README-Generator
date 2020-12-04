// function to generate markdown for README
function generateMarkdown(data) {
	// switch case for type of license used
	switch (data.license) {
		case "GNU":
			liBadge =
				"[![License: GPL v3](https://img.shields.io/badge/License-GPL--v3-blue.svg)](https://opensource.org/licenses/GPL-3.0)";
			liInfo =
				"[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)";
			break;
		case "Mozilla":
			liBadge =
				"[![License: MPL-2.0](https://img.shields.io/badge/License-MPL--2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
			liInfo = "[**MPL-2.0**](https://opensource.org/licenses/MPL-2.0)";
			break;
		case "Apache":
			liBadge =
				"[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-brightgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
			liInfo = "[**Apache-2.0**](https://opensource.org/licenses/Apache-2.0)";
			break;
		case "MIT":
			liBadge =
				"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
			liInfo = "[**MIT**](https://opensource.org/licenses/MIT)";
			break;
    }
    //returning template literal
	return `# ${data.title}
    
    ${liBadge}

    ## Description
    ${data.description}

    ## Table of Contents
    - [**Installation**](#installation)
    - [**Usage**](#usage)
    - [**License**](#license)
    - [**Contributing**](#contributing)
    - [**Tests**](#tests)
    - [**Questions**](#questions)
    
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    This project is licensed under the ${liInfo} license.

    ## Contributing
    ${data.contribution}

    ## Tests
    ${data.testInstruction}

    ## Questions

    If you have any questions please use the contact information below to reach out.
    
    Github Profile: [**@${data.username}**](https://github.com/${data.username})
    Email: [**${data.email}**]
    `;
}

module.exports = generateMarkdown;
