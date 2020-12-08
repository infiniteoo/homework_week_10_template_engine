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

async function userQuestions() {
    const qs = await inquirer
        .prompt([{
            type: "input",
            name: "username",
            message: "Enter new teammate's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter new teammate's id number:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter new teammate's email address:"
        },
        {
            type: "list",
            name: "position",
            message: "Who would you like to add?",
            choices: ["Manager", "Engineer", "Intern"]
        }
        ]);

    switch (qs.position) {
        case "Intern":

            const school = await inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "School Name:"
                }
            ]);

            return intern = new Intern(qs.name, qs.id, qs.email, school.name);


        case "Engineer":

            const github = await inquirer.prompt([
                {
                    type: "input",
                    name: "username",
                    message: "Github Username:"

                }
            ]);
            return engineer = new Engineer(qs.name, qs.id, qs.email, github.username);

        case "Manager":

            const office = await inquirer.prompt([
                {
                    type: "input",
                    name: "number",
                    message: "Office Number:"
                }
            ]);
            return maanger = new Manager(qs.name, qs.id, qs.email, office.number)

        default:
            console.log("Building team...");

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

    console.log({finalForm});
};

buildTeam();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

