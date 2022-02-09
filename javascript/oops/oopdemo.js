// class
class Employee{
    setEmployee(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printEmployee(){
        console.log(this.name,this.age,this.gender);
    }
}

// object 1
var emp=new Employee()
emp.setEmployee("ram",25,"male")
emp.printEmployee()

// object 2
var emp1=new Employee()
emp1.setEmployee("ravi",25,"male")
emp1.printEmployee()