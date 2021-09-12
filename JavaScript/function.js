console.log("This is functions notes");

let name = "Bhumi";
// console.log(name + " is a good girl");
// this thing is done with just a single line function.

// for setting default value of any argument and will be printed if not given second value 
// in the below function we can add default value as 
function greet(name, greetText = "Greetings from default "){
    console.log(greetText + " " + name);
    console.log(name + " is a good girl");
}
// function greet(name, greetText){
//     let name1 = "Name1";  // Local Variable
//     console.log(greetText + " " + name);
//     console.log(name + " is a good girl");

// }

function sum(a, b ,c) {
    let d = a + b + c;
    return d;
    // after return statement nothing will be returned and reached 
    // console.log("Function is returned.");
}
console.log(sum(3,4,5));

let greetText = "Good Morning";

greet(name, greetText);
greet("Bhumika");
greet("Samika", "Good Evening");