arr=[1,2,3,6,7,8]
// create a array if num <5 num-1 else num+1
// [0,1,2,7,8,9]
var op=arr.map(num=>num<5?num-1:num+1)
console.log(op);