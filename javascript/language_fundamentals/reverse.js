// var num=123
// palindrome
 
var num=123
while(num!=0){
    let lastDigit=num%10;
    console.log(lastDigit);
num=Math.floor(num/10)
}


// another way
// var num=123
// var str=""
// while(num!=0){
//     let lastDigit=num%10;
//     str+=lastDigit
// num=Math.floor(num/10)
// }
// console.log(str);