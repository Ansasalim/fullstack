var expenses=[25000,30000,10000,50000,60000]

var minExp=expenses[0];//0<25000
for(let amount of expenses){
    // amount=25k
    if(minExp>amount){
        minExp=amount
    }
}
console.log(minExp);