// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// //Find More Than the First Match
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line

//Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/gi; // Change this line
let result = unRegex.test(exampleStr);