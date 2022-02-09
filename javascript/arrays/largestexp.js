var expenses=[25000,30000,40000,50000,60000]
var maxExp=0;//0<25000
for(let amount of expenses){
    // amount=25k
    if(maxExp<amount){
        maxExp=amount
    }
}
console.log(maxExp);