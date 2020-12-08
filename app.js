const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const inquirer2 = require("inquirer");
const path = require("path");
const fs = require("fs");
const art = require("./ascii-art-intro");
const finalTeam = [];
let finalAddition = false;
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const questions = require('./questions');
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


async function userQuestions() {
    const qs = await inquirer
        .prompt(questions.main);

    console.log({qs})

    switch (qs.position) {
        case "Intern":
            const school = await inquirer.prompt(questions.intern);

            return intern = new Intern(qs.name, qs.id, qs.email, school.name);


        case "Engineer":

            const github = await inquirer.prompt(questions.engineer);
            return engineer = new Engineer(qs.name, qs.id, qs.email, github.username);

        case "Manager":

            const office = await inquirer.prompt(questions.manager);
            return manager = new Manager(qs.name, qs.id, qs.email, office.officeNumber);
    }
};

async function buildTeam() {

    while (finalAddition === false) {
        let newTeamMember = await userQuestions();
        finalTeam.push(newTeamMember);
        const addAnother = await inquirer.prompt([
            {
                type: "list",
                name: "another",
                message: "Add another teammate?",
                choices: ['Yes', 'No']
            }


        ])

        if (addAnother.another === "No") {
            finalAddition = true;

        }


    };

    // render HTML file?
    const finalForm = render(finalTeam);

    // check to see if output directory exists

    fs.access(OUTPUT_DIR, error => {
        if (error) {
            // create directory
            fs.mkdirSync(OUTPUT_DIR);
        }
    })

    // write HTML file to output directory
    fs.writeFile(outputPath, finalForm, err => {
        if (err) throw error;
        console.log("File written to: " + outputPath)
    });


};

buildTeam();




