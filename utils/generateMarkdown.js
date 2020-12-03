// function to generate markdown for README
function generateMarkdown(data) {
    // switch case for type of license used
    switch(data.license){
        case "GNU":
            liBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)";
            liInfo = "[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)";
    }
	return `# ${data.title}
    
    `;
}

module.exports = generateMarkdown;
