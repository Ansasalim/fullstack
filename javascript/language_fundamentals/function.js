// addition

function add(num1,num2){
    let res=num1+num2;
    return res;
}
console.log(add(10,20));


// subtraction
function subtraction(num1,num2)
{
    return num1-num2
}
console.log(subtraction(10,20));

// cube
function cube(num){
    return num**3
}
console.log(cube(3));


// numcheck
// function numChek(num){
// if(num%2==0){
//     return "even"
// }
// else{
//     return "odd"
// }
// }
// console.log(numCheck(10));

function numChek(num){
    return num%2==0?"even":"odd"
}
console.log(numCheck(10));