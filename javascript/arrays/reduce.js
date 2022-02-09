arr=[1,2,3,6,7,8]

// reduce

var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);

// min
console.log(arr.reduce((n1,n2)=>n1<n2?n1:n2));

// max
console.log(arr.reduce((n1,n2)=>n1>n2?n1:n2));