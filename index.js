const inquirer  = require ("inquirer")
const fs = require ("fs")

function userInput () {
    inquirer.prompt([
        {
            type: "input",
            name:"title",
            message:"Enter Project Title"
        },
        
            {
                type: "input",
                name:"description",
                message:"Add a description of your project"
            },
            {
                type: "input",
                name:"Installtion",
                message:"Instruction for how to install application"
            },
            {
                type: "input",
                name:"Usage",
                message:"Instruction for how to use application"
            },
            {
                type: "list",
                name:"License",
                message:"Choose a license for your project",
                choices: ["MIT", "ISC", "APACHE 2.0", "GPL", "NONE"]
            },
            {
                type: "input",
                name:"Contributing",
                message:"How to contribute to the project"
            },
            {
                type: "input",
                name:"Tests",
                message:"Instruction for how to test the application"
            },
            {
                type: "input",
                name:"Questions",
                message:"Email: ",
                default: "kiana.sambursky@gmail.com"
            },
            {
                type: "input",
                name:"gitHubUsername",
                message:"Input your GitHub Username"
            },
            {
                type: "input",
                name:"yourName",
                message:"Input developer name"
            },
    ]) .then (response=> {
        console.log(response)
    })
}

userInput();