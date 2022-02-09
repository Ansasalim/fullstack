var arr=[10,11,12,13,2,14]
var element=2;
var flag=0;

for(let index in arr){
  if(element==arr[index]){
    console.log("position",index);
    flag=1;
    break;
}
}
console.log(flag==0?"not found":"found");


