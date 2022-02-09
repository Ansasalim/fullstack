var arr=[4,5,6]
// 11,10,9
var op=[],sum=0

// step1 find sum 
for(let num of arr){
 sum+=num
}

for(let num of arr){
    // console.log(sum-num);
    op.push(sum-num)
}
console.log(op);


// elemnt add chyn push
// arr.push(10)
// console.log(arr);