//What is the HTML syntax to add an external JavaScript file?
// <script></script>

//Can you run JS in a file with a JS extension in your browser?
//As long as you use a src element

//How do you write a multiple line comment in JS
// You use this element "/* 'comment' /*"

// What is the best way to remove a line of code from running that you might want to keep as you debug
// You comment it out

/*
Variable     Value              */
firstname = "Maaike";
    x     =    2;
//Variables can be redefined later on

let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;

/*var and let can both be reasigned a new value however 
var has a global scope  var can re redefined anywhere in the entire code
let has a block scope   let can only de redefined anywhere in the begging and end point of {   }                            
const can only ever be defined once
*/

/* A string is used to store a text value by 
Double quotes
Single quotes 
Backticks */
let singleString = 'Single String!';
let doubleString = "Double String!"
let Backticks = `Backticks!`;

let str3 = "new \nline.";
let str4 = "I'm Containing a backslash: \\!";
console.log(str3);
console.log(str4);