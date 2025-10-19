//grade calculater
/*const grade = prompt("Enter your grade (0-100):");
console.log("Your grade is: " + grade);
if (grade >= 90) {
    console.log("You received an A.");
}
else if (grade >= 80) {
    console.log("You received a B.");
}
else if (grade >= 70) {
    console.log("You received a C.");
}
else if (grade >= 60) {
    console.log("You received a D.");
}
else {console.log("You received an F.");
}
*/

let grades = [50, 89, 75, 84, 84, 99];
let sum = 0;

for(let i = 0;i < 5; i++)
{
    sum += grades[i];
}
console.log(sum);
let result = sum / 5;
console.log(result);

