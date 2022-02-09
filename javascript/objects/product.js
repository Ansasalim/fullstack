products = [
    {
      pid: 100,
      p_name: "samsungA52",
      band: "5g",
      price: 30000,
      display: "amoled",
    },
    {
      pid: 101,
      p_name: "samsungf41",
      band: "4g",
      price: 15000,
      display: "amoled",
    },
    {
      pid: 102,
      p_name: "mi10promax",
      band: "4g",
      price: 19000,
      display: "amoled",
    },
    { pid: 103, p_name: "mi11lite", band: "5g", price: 22000, display: "led" },
    {
      pid: 104,
      p_name: "iphone12pro",
      band: "5g",
      price: 80000,
      display: "amoled",
    },
    { pid: 105, p_name: "realme", band: "4g", price: 12000, display: "led" },
  
  ];
  
  // # print product names only
  // products.forEach(p=>console.log(p.p_name))

  // # print all mobile details whose display="amoled"
  // products.filter(p=>p.display=="amoled").forEach(p=>console.log(p.p_name))
  
  // # print 5g moboile names
  // products.filter(p=>p.band=="5g").forEach(p=>console.log(p.p_name));
  
  // # filter mobiles based on price
  // products.sort((p1,p2)=>p2.price-p1.price).forEach(p=>console.log(p))
  
  // # print costly mobile
var costly_mobile=products.reduce((m1,m2)=>m1.price>m2.price?m1:m2)
console.log(costly_mobile);
  // print price only 
// var costly_mobile=products.map(p=>p.price).reduce((amt1,amt2)=>amt1>amt2?amt1:amt2)
// console.log(costly_mobile);

// print full deatils of phn
  // console.log(products.reduce((p1,p2)=>p1["price"]>p2["price"]?p1:p2));
  // # print low cost mobile
//   var cheap_mobile=products.map(p=>p.price).reduce((amt1,amt2)=>amt1<amt2?amt1:amt2)
// console.log(cheap_mobile);

  // console.log(products.reduce((p1,p2)=>p1["price"]<p2["price"]?p1:p2));