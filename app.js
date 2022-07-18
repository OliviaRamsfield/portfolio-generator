//MODULE 9.1 CODE EXAMPLE
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
// //same as .forEach()
// const printProfileDataArr = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("=============");

// // .forEach() is equal to a for loop to iterate through an array but ONLY works for arrays
// profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileDataArr(profileDataArgs);

// ACTUAL CODE FOR PROJECT
// activate file system module in node.js
const fs = require("fs");

//connect to export page-template code
const generatePage = require("./src/page-template");

const profileDataArgs = process.argv.slice(2);

const [names, github] = profileDataArgs;

//generating new file called index.html with the variables names and github and catching error name/message or success
fs.writeFile("index.html", generatePage(names, github), err => {
    if (err) throw err;

    console.log("Portfolio complete! Check out index.html to see the output!");
});