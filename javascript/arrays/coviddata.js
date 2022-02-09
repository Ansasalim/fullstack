var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district

// var redCategory=coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
// console.log(redCategory);

// for(let highest of coivd_data){
//     if(highest[1]=="ernamkulam"){
//     console.log(highest);
// }
// }

// q2 district with higest 1 dose vaccination rate

var greenCity=coivd_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
var greenDistricts=coivd_data.filter((d)=>d[5]==greenCity[5])
console.log(greenDistricts);

// for(let highest of coivd_data){
//     if(highest[5]=="9"){
//     console.log(highest);
// }
// }
   
// q3 district with lowest death cases

// for(let highest of coivd_data){
//     if(highest[3]=="50"){
//     console.log(highest);
// }
// }

// q4 sort district with +ve cases
// coivd_data.sort((data1,data2)=>data1[2]-data2[2])
// console.log(coivd_data);

// q5 sort the districts based on 1st dose
// coivd_data.sort((data1,data2)=>data1[5]-data2[5])
// console.log(coivd_data);


// q6 is there any states with +ve cases > 60000
// for(let highest of coivd_data){
//     if(highest[2]>60000){
//         console.log(highest);
// }
// }

// q7 print trissur details
// for(let highest of coivd_data){
//     if(highest[1]=="thrissur"){
//         console.log(highest);
//     }
// }

// q8 total nu,ber of +ve cases
// for(let highest of coivd_data){
//     console.log(highest[2]);
// }


// q9 total number of cured cases
// for(let highest of coivd_data){
//     console.log(highest[4]);
// }

// q10 cured numbers of iduky
// for(let highest of coivd_data){
//     if(highest[1]=="idukki"){
//         console.log(highest[4]);
//     }
// }

// var idukkiDetails=(coivd_data.find(data=>data[1]=="iduky")[4]);
// console.log(idukkiDetails);
// console.log(coivd_data.map(cured=>cured[4]));

// print all +ve case count
// console.log(coivd_data.map(data=>data[2]));
// print +ve case and district name
// console.log(coivd_data.map(data=>[data[1],data[2]]));