var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:35},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
]

// {thrissur:32,ekm:32,ktm:30}
var weatherOut={}
for(let record of data){
let districtName=record["districtname"]
let curTemp=record["weather"]
if(districtName in weatherOut){
    let oldTemp=weatherOut[districtName]
    if(curTemp>oldTemp){
        weatherOut[districtName]=curTemp
    }
}else{
weatherOut[districtName]=curTemp
}
}
// console.log(weatherOut);

// print highest temp disrict in weatherout
// {th:32,ekm:32,ktm:30,idk:35}
// var out=[
//     ["thrissur",32],
//     ["ekm",32],
//     ["ktm",30],
//     ["idk",35]
// ]
// out.sort((r1,r2)=>r1[1]-r2[1])
// console.log(out);

console.log(Object.entries(weatherOut).sort((r1,r2)=>r2[1]-r1[1]));
