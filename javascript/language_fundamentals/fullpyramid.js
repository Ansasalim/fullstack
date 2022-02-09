for(let row=1;row<=4;row++){
let str="";
for(let space=1;space<=(4-row);space++){
str+=" ";
}
for(let col=1;col<=row;col++){
  str+="* ";
}
console.log(str);
}










// full pyramid half pyramid

// let string = "";
// // External loop
// for (let row= 1; row <= 5; row++) {
//   // printing spaces
//   for (let j = 1; j <= 5 - row; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let col=0; col< 2*row-1; col++){
//     string += "*";
//   }
// string += "\n";
// }
// console.log(string);
