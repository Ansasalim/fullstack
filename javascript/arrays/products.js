
var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidendseek",50,0],
    [103,"moms's",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50],

]


// print costly product detail reduce
// console.log(costlyProduct=products.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2))

//  print out of stock products   filter
// console.log(outofStock=products.filter((p)=>p[3]=="0"))

// print oreo details find
// console.log(itemDetails=products.find((p)=>p[1]=="oreo"))

//  sort products based on available stock order by desc
// console.log(stockOrder=products.sort((p1,p2)=>p2[3]-p1[3]))

// print product details having max available stock reduce
// console.log(maxStock=products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2))

// is there any products with available stock greater than 100
// console.log(isAvailable=products.some((p)=>p[3]>100))

// is there any products available in range(10-20)
// console.log(isAvailabe=products.some((p)=>p[2]>=10 && p[2]<=20));

// print all products available in range(10-20)
// console.log(isAvailabe=products.filter((p)=>p[2]>=10 && p[2]<=20));

// print products names
products.forEach(p=>console.log(p[1]))
// print products price
products.forEach(p=>console.log(p[2]))


