var arr=[10,13,12,15,16,3,2]

// iteration by using 3 methods

for(let num of arr){
    console.log(num);
} 

// 2nd method
for(let index in arr){
    console.log(arr[index]);
}
console.log("no of objects",arr.length);

//  3rd method
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}