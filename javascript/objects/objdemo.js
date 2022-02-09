var expenses={
    jan:10000,
    feb:20000,
    march:30000,
    april:35000,
}

var student={
    rol:1000,
    st_name:"ram",
    course:"mearn",
    total:450
}
// print student name
// console.log(student["st_name"]);
// console.log(student.st_name);
// console.log(student.course);

// check property exist in obj
// oru key value undonn check chynm return true /false
// console.log("total" in student);
// console.log("gender" in student);

// add new property
// student["gender"]="male"
// student.gender="male"
// console.log(student);

// isVaccinated:true
// student.isVaccinated=true
// console.log(student);

// vaccinated:covisheild
// student.vaccinated="covishield"
// console.log(student);

// update chyn
// student.vaccinated="co-vaxin"
// console.log(student);

// student.total+=50
// console.log(student);

// iteration
for(let key in student){
    console.log(key);
    // key and value print chyn
    console.log(student[key]);
}
