// var a,b,c;
// a=console.log("Enter the first value")
// b=prompt ("Enter the second value")
// c=prompt ("Enter the third value")
// if(a>b){
//     console.log(a,"is the largest number");
// }
// else if(b>a){
//     console.log(b,"is the largest number");
// }
// else{
//     console.log(c,"is the largest number");
// }
// program to find the largest among three numbers

// take input from the user
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;
var num1=-2,num2=-5,num3=-3;

// check the condition
if(num1 > num2 && num1 > num3) {

    console.log(num1, "is maximum");
}
else if (num2 >num1 && num2 >num3) {
    console.log(num2, "is maximum");

}
else if(num3>num1 &&num3>num2){
    console.log(num3, "is maximum");
}
else if(num1==num2 && num1==num3){
    console.log("3 are equal")
}


// display the result
