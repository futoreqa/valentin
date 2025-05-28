alert("This code is executed from an external file!");
console.log("Message in the console");

let name = "valentin";
let birthYear = 2004;
let isStudent = true;

console.log(name);
console.log(birthYear);
console.log(isStudent);

let score = prompt("Enter your score:");
if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 70) {
    console.log("Good");
} else {
    console.log("Could be better!");
}

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration: ${i}`);
}