const questions = {

    main:

        [
            {
                type: "input",
                name: "name",
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
        ],

    intern:

        [
            {
                type: "input",
                name: "school",
                message: "School Name:"
            }
        ],

    manager:

        [
            {
                type: "input",
                name: "number",
                message: "Office Number:"
            }
        ],

    engineer:

        [
            {
                type: "input",
                name: "username",
                message: "Github Username:"
            }
        ],

    oneMore:

        [
            {
                type: "list",
                name: "another",
                message: "Add another teammate?",
                choices: ['Yes', 'No']
            }
        ]
};

module.exports = questions;