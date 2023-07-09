//var fs = require("fs")

// fs.writeFile("mynodefile.txt", "Node.js Test String", "utf8", function (err) {
//     console.log(err);
//     console.log("Done!")
// })

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Please enter the STUDENTS name: ", (name) => {
    rl.question("Please enter the name of the ASSIGNMENT: ", (assignment) => {
        rl.question("What percent did you receive for your Grade? ", (grade) => {
            if (grade < 60) {
                letterGrade = "F";
                console.log(name);
                console.log(assignment);
                console.log("Grade: " + letterGrade);
                console.log("The assignment was missing all of the required functionality.");
                rl.close();
            }
            else if (grade >= 60 && grade <= 69) {
                letterGrade = "D";
                console.log(name);
                console.log(assignment);
                console.log("Grade: " + letterGrade);
                console.log("The assignment was missing most of the required functionality.");
                rl.close();
            } else if (grade >= 70 && grade <= 79) {
                letterGrade = "C";
                console.log(name);
                console.log(assignment);
                console.log("Grade: " + letterGrade);
                console.log("The assignment was missing some of the required functionality.");
                rl.close();
            } else if (grade >= 80 && grade <= 89) {
                letterGrade = "B";
                console.log(name);
                console.log(assignment);
                console.log("Grade: " + letterGrade);
                console.log("The assignment was missing a little of the required functionality.");
                rl.close();
            } else if (pargrade >= 90 && grade <= 100) {
                letterGrade = "A";
                console.log(name);
                console.log(assignment);
                console.log("Grade: " + letterGrade);
                console.log("The assignment was missing none of the required functionality.");
                rl.close();
            }
        })

    })
})