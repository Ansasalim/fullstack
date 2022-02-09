// program to check an Armstrong number of three digits

var num=153;
var sum=0;
while(num!=0)
{
    let digit=num%10;
    sum+=digit**3
    num=Math.floor(num/10)
}
console.log(sum);


// another way
// let sum = 0;
// const number = 153;

// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     // finding the one's digit
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     // removing last digit from the number
//     temp =parseInt(temp / 10); // convert float into integer
// }
// // check the condition
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }