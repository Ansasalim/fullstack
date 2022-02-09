// create a new class student print (rolno,st_name,course,total)print deatails()

class Student{
    constructor(rolno,st_name,course,total){
        this.rollno=rolno;
        this.name=st_name;
        this.corse=course;
        this.tot=total;
    }
    printStudent(){
    console.log(this.rollno,this.name,this.corse,this.tot);
}
}

// object
var std1=new Student(1000,"anu","ms",100)
std1.printStudent()

// variable are prepended wuth this instance variable


// constructor
// duty=>initializing instance variables
// in js constructor is same name as constructor
// is automatically invoked in object creation time and arguments passed 


