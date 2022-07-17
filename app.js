const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//MODULE 9.1 CODE EXAMPLE
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