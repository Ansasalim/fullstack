// // hollow pyramid
for (let row = 1; row <= 4; row++){
  let str = "";

  for(col=1;col<=7;col++){
 if(row==4|| col+row==5 || col-row==3 ){
    str += "*";
     }
else{
  str+=" "
    }
}
console.log(str);
}














// let string = "";
// // External loop
// for (let row = 1; row <= 5; row++) {
//   // printing spaces
//   for (let j = 1; j <= 5- row; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let col = 0; col < 2 * row - 1; col++) {
//     if(row === 1 || row === 5) {
//       string += "*";
//     }
//     else {
//       if(col === 0 || col === 2 * row- 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);