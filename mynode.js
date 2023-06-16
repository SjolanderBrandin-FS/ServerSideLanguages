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


rl.question("What is your name?", (name) => {
    rl.question("What is your favorite color", (color) => {
        console.log(name + " " + color);
        rl.close();
    })
})