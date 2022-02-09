// var num1=100,num2=300,num3=150;

// // check the condition
// if(num1 > num2 && num1< num3) {
//     secondLargest = num1;
// }
// else if (num2 >num1 && num2 < num3) {
//     secondLargest= num2;
// }
// else {
//     secondLargest = num3;
// }

// // display the result
// console.log("The secondLargest number is " +  secondLargest);

var num1=-2,num2=-5,num3=-3;

// check the condition
if(num1 > num2 && num1 > num3) {
if(num2>num3){
console.log(num2,"second largest");
}
else if (num2 >num1 && num2 >num3) {
    console.log(num2,"second largest");

}
else if(num3>num1 &&num3>num2){
    console.log(num3, "is maximum");
}
else if(num1==num2 && num1==num3){
    console.log("3 are equal")
}