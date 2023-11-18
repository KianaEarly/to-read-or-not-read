function generateReadMe(data) {
    return `
# ${data.title}

## Description 
${data.description}

## About the Author
name: __${data.yourName}__
> gitHubProfile: 
> [gitHub](https://github.com/${data.gitHubUsername})


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributin](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation 
${data.Installation}

### Usage
${data.Usage}

### License
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg) 
> [For more information about Licenses please see ] (https://choosealicense.com/)

### Contributing
${data.Contributing}

### Tests
${data.Tests}

### Questions
${data.questions}
`
}

module.exports = generateReadMe 
