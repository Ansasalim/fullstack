// function add(num1,num2){
//     return num1+num2
// }

// function add(n1,n2,n3){
//     console.log("inside 3 arg");
//     return n1+n2+n3
// }

// function add(n1,n2,n3,n4){
//     console.log("inside 4 arg method");
//     return n1+n2+n3+n4
// }

// console.log(add(10,20,30,40));
// console.log(add(10,20,30));
// console.log(add(10,20));
// function overloading
// same function name different number of parameters

// spread operator is .
// function add(...args){
//     console.log("arg method");
//     console.log(args);
// }
// add(10);
// add(10,20)
// add(10,20,30)

// spread operator is .
function add(...args){
    return args.reduce((n1,n2)=>n1+n2)
}
console.log(add(10,20,30,40))

// spread operator is .
function findMax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findMax(10,20,30,40,50,60));

var arr=[10,20,30]
arr.push(10,20,30)