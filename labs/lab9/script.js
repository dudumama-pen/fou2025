//grade calculater
/*const grade = prompt("Enter your grade (0-100):");
*/

let grades = [50, 89, 75, 84, 84, 99];
let sum = 0;

for(let i = 0;i < grades.length; i++)
{
    if (i%3 ==0) 
    sum += grades[i];
}

/*
console.log(sum);
let result = sum / grades.length;
console.log(result);


sum = 0;
for (let item of grades) {
     sum += item[i];
}
console.log(sum);
let result = sum / grades.length;
console.log(result);
*/

const countries = ["USA", "Canada", "Mexico", "France", "Germany"];
//let country1 = countries[0];
//let country2 = countries[1];
//let country3 = countries[2];

let [country1, country2, country3] = countries;
[country1, ...rest]= countries;
console.log(country1, country2, country3);

countries.forEach((value,index) => {console.log("this is" ,value)
});

grades.forEach((value,index) => {console.log("this is" ,grades)
});

function printNum(value,index) {
    console.log("this is", value,"of index", index);
}
const numbers = [1,2,3,4,5,6,7,8,9];
const firstLargeNumber = numbers.find((value) => value > 5);
console.log(firstLargeNumber);

const LargeNumber = numbers.find((value) => value === 5);
console.log(LargeNumber);

if (!LargeNumber) {
    console.log("not found");
}
else {
    console.log("found", LargeNumber);
}

const nums = [1,2,3,4];
const squaredNums = nums.map((value) => value * value);
console.log(squaredNums);