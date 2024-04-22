// const name ="nitesh"
// console.log("Hello, World!");

// this is program to find the missing number from the given array

// input : array[1,0,3]
// output: 2
const name="Nitesh"
const greeting="hello"

console.log(`${greeting}, ${name} your code is modify`)

const arr=[1,2,3,4,5,0]

const len= arr.length;

let expectedSum= len*(len+1)/2;
let actualSum=0;
for(let i=0; i<len;i++){
    actualSum+=arr[i]
}
const missingNum= expectedSum-actualSum
console.log(expectedSum)
console.log(actualSum)
console.log(missingNum)
