// var arr=[
//     [10,50],
//     [20,60],
//     [1,2],
//     [5,8],
//     [30,40]
// ]

// print all numbers >10  filter
// arr.flat().filter(num=>num>10).forEach(num=>console.log(num))

// print squares of all numbers
// arr.flat().map((num)=>num**2).forEach(num=>console.log(num))

// print total sum
// sum=arr.flat().reduce((n1,n2)=>n1+n2)
// console.log(sum)
// console.log(sum=arr.flat().reduce((n1,n2)=>n1+n2))

// print highest element 
// console.log(arr.flat().reduce((n1,n2)=>n1>n2?n1:n2));

var string="hello hai"
// print vowels from this string

Array.from(string).filter(char=>char=="vowels").forEach(char=>console.log(char))
// console.log(Array.from(string));
// Array.from(string).map(char=>char.toUpperCase()).forEach(char=>console.log(char))