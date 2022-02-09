var arr=[10,11,12,13,2,14]
var element=2;
var flag=0;


for(let num of arr){
    // num=10
  if(num==element){//10==3,3=3
    flag=1;
    break
}
}
console.log(flag==0?"not found":"element found");