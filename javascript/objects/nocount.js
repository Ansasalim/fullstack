var arr=[10,10,20,20,30,30,40,40,40,50,50,50]

var noCount={}
// for(number of arr){
//     if(number in noCount){
//         noCount[number]+=1;

//     }else{
//         noCount[number]=1;
//     }
// }
// console.log(noCount);
arr.map(num=>num in noCount?noCount[num]+=1:noCount[num]=1)
console.log(noCount);