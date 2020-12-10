# University of Minnesota Coding Boot Camp - Fall 2020 
## Assignment #10 Template Engine: Employee Summary
<br/>

![example gif](/example/example.gif)

### Overview

The focus of this assignment was to create a workplace team profile generator that lets the user input the names, roles, email addresses and ID numbers for each member of the team.  In addition, depending on their role, an additional piece of information is gathered such as an engineer's Github username, an intern's current school of attendance, and a manager's office number.  Once all team member's profiles have been entered, an HTML file is generated that contains a visual recap of the team.  Each team member is listed along with their title, ID number, role, and an additional piece of personal information on their own customized card complete with icons and CSS.


### Review of Tasks

Two main takeaways from this week's homework assignment were Class creation and testing.  I also learned a lot about how to utilize async functions and await commands to help wrangle the various question/answer prompts that Inquierer provides.  Before implementing these two features, I had the hardest time getting this program to work, especially when it came to looping a series of Inquirer prompts.  Because of the asynchronous nature of Node.js and Inquirer, prompts and console.logs were completing before questions were being answered.  Overall, this homework started out extremely frustrating, but by the end I grew so much as a programming student by doing my own research to solve my problems.  


#### Here are the steps taken to achieve this complete this week's homework project:

* Built initial file system structure and deployed basic blueprint to Github to complete repository construction.
* Sketched out pseudo code logic and transcribed them into the code as comments.
* Built class structures for Employee, then extending it for Engineer, Manager and Intern classes
* Wrote prototype methods for each class.
* Ensured all supplied tests passed through Jest.
* Wrote series of Inquirer prompts inside a while loop that allows unlimited team member creation.
* When a single series of questions concludes, a respective class object is created depending on the role the user entered.
* That employee/person object is then added to a 'finalTeam' object array of all team member objects.
* Passed that finalTeam object array to the pre-supplied 'render' method which generates a final object array of all team members and HTML code.
* Wrote function to ensure 'output' directory exists before writing file.  If the directory doesn't exist, we create it.
* Write the final object array to a text file which generates team.html in the output directory.

*After multiple trial and error debugging sessions, all applied logic appears sound and no bugs can be generated from purposeful negligent entries.  From this point, it was time to clean up:*

* Refactor reduntant and worthless code.
* Removed multiple, annoying console.log commands used for debugging.
* Double-checked to ensured code was properly formatted and commented before submission.
* Used code validation service.
* Wrote README.md file.
* Added animated GIF to ReadMe.
 

### Installation

Installation should be fairly straightforward, but here's a quick guide to get up and running, assuming you have **Visual Studio Code** and **Git** (with the accompanying interface **Git Bash**) installed.

* from your shell input the command: `git clone https://github.com/infiniteoo/homework_week_10_template_engine`
* once downloaded, from the working directory in the shell, input the command: `code .`


### License

Copyright 2020 T. Dorman, distrubuted under the **GNU Public License** for the Univeristy of Minnesota Part-Time Full Stack Coding Boot Camp.














