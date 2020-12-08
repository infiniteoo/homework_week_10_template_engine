const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
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
buildTeam();


function clearConsole() {

    // credit : https://gist.github.com/timneutkens/f2933558b8739bbf09104fb27c5c9664

    const readline = require('readline');
    const blank = '\n'.repeat(process.stdout.rows);
    console.log(blank);
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
};


async function userQuestions() {

    // ask universal questions
    const q = await inquirer.prompt(questions.main);

    // depending on their role we'll ask an additional question then build the objects
    switch (q.position) {

        case "Intern":
            const school = await inquirer.prompt(questions.intern);
            return new Intern(q.name, q.id, q.email, school.name);

        case "Engineer":
            const github = await inquirer.prompt(questions.engineer);
            return new Engineer(q.name, q.id, q.email, github.username);

        case "Manager":
            const office = await inquirer.prompt(questions.manager);
            return new Manager(q.name, q.id, q.email, office.number);
    };
};

async function buildTeam() {

    // infinite loop until we're done adding teammates
    while (finalAddition === false) {
        
        // ask universal questions
        let newTeamMember = await userQuestions();

        // add new team member to final team object array
        finalTeam.push(newTeamMember);

        // add another teammmate?
        const addAnother = await inquirer.prompt(questions.oneMore);

        if (addAnother.another === "No") {
            finalAddition = true;
        };
    };

    // render HTML file
    const finalForm = render(finalTeam);

    // check to see if output directory exists
    fs.access(OUTPUT_DIR, error => {
        if (error) {
            // if not, create directory
            fs.mkdirSync(OUTPUT_DIR);
        };
    });

    // write HTML file to output directory
    fs.writeFile(outputPath, finalForm, err => {
        if (err) throw error;
        console.log("File written to: " + outputPath);
    });
};






