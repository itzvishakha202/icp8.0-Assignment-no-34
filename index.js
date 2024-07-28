// sum of odd number of given array
const numbers = [2, 3, 10, 13, 9, 12, 8];
let sumOdd = 0;

for(let i=0; i < numbers.length; i++)
{
if(numbers[i] % 2 == 1){
   sumOdd += numbers[i];
}
}
console.log(`sum of odd numbers: ${sumOdd}`);

// say hello to all elements in array
const employees = ["priya",  "omkar", "jay",  "abhi",  "ram",  "sita"]

for (let i=0; i < employees.length; i++)
    {
    console.log(`Hello ${employees[i]}`);
}

// //finding largest number of the array
// const number = [2, 4, 5, 8, 8, 10, 12, 16];
 
