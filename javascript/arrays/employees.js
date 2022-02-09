 var employees=[
        [1000,"ram","developer","kochi",25000,1],
        [1000,"ravi","developer","kochi",35000,2],
        [1000,"arjun","qa","tvm",34000,1],
        [1000,"tom","qa","tvm",45000,2],
        [1000,"jim","ba","banglore",55000,3],
        [1000,"tinu","ba","banglore",35000,2],
        [1000,"fred","sales","mumbai",45000,2],
        [1000,"abi","sales","mumbai",65000,5],
    
    ]

    // print deatails of abi
    // var empDetails=employees.find(emp=>emp[1]=="abi")
    // console.log(empDetails);

    // sort employees based on salary order by desc
    // employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
    // console.log(employees);


    // q1 print all employee names only
    //  using map methods
console.log(employees.map(emp=>emp[1]));
    // for(let employee of employees){
    //     console.log(employee[1]);
    //     }

    // q2 print no of employees in the compnay 
    // console.log(employees.length);

    // print developer deatails
    // for(let emp of employees){
    //     if(emp[2]=="developer"){
    //     console.log(emp);
    //     }
    //     }

    // console.log(employees.filter(emp=>emp[2]=="developer"));
// q4 print employee details whose salary>30000
    // for (let employee of employees){
    // if(employee[4]>35000){
    //     console.log(employee);
    //   }
    // }

// print details of employee arjun

// for(let emp of employees){
//             if(emp[1]=="arjun"){
//             console.log(emp);
//         }
//     }

// sort employees based on exp order by asc
//     employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
// console.log(employees);

// print experience only all employees
// console.log(employees.map(emp=>emp[5]));

// reduce method
// total salary

// var totalSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+
// sal2)
// console.log(totalSalary);

// min salary
// var minSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1<sal2?sal1:sal2)
// console.log(minSalary);


// highest salary
// var highestSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
// console.log(highestSalary);

// highest exp

// var highestExp=employees.map(emp=>emp[5]).reduce((exp1,exp2)=>exp1>exp2?exp1:exp2)
// console.log(highestExp);

// var expEmp=employees.reduce((e1,e2)=>e1[5]>e2[5]?e1[5]:e2[5])
// console.log(expEmp);

// name of employee who have low exp
var fresherEmp=employees.reduceRight((e1,e2)=>e1[5]<e2[5]?e1:e2)
console.log(fresherEmp[1]);