const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const inquirer2 = require("inquirer");
const path = require("path");
const fs = require("fs");
const art = require("./ascii-art-intro");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


clearConsole();
console.log(art);


function clearConsole() {

    // credit : https://gist.github.com/timneutkens/f2933558b8739bbf09104fb27c5c9664

    const readline = require('readline')
    const blank = '\n'.repeat(process.stdout.rows)
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
};


// take manager's info first

async function managerQs() {
    let manager = await inquirer
        .prompt([{
            type: "input",
            name: "manName",
            message: "Enter the team manager's name:"
        },
        {
            type: "input",
            name: "manID",
            message: "Enter the team manager's id number:"
        },
        {
            type: "input",
            name: "manEmail",
            message: "Enter the team manager's email address:"
        },
        {
            type: "input",
            name: "manOffice",
            message: "Enter the team manager's office number:"
        }
        ]);

    return teamManager = new Manager(manager.manName, manager.manID, manager.manEmail, manager.manOffice);



};

async function buildTeam() {
    const finalTeam = [];
    let bigBoss = await managerQs();
    finalTeam.push(bigBoss);
    console.log({finalTeam});

    



};

buildTeam();

