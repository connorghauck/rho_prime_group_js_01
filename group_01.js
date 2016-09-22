var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

calcBonus(atticus);
calcBonus(jem);
calcBonus(boo);
calcBonus(scout);

//Constructor
// function Employee(name, employeeNum, salary, rating) {
//
// this.name = name;
// this.employeeNum = employeeNum;
// this.salary = salary;
// this.rating = rating;
// }

//var employees = new Employee ()
// var newEmployeeArray = [];
// for (var i = 0; i <= employees.length; i++) {
//
//     newEmployeeArray[i] = employees[i];
//     calcBonus(newEmployeeArray);
//
// }


// var atticus = new Employee("Atticus", "2405", "47000", 3);
// var jem = new Employee("Jem", "62347", "63500", 4);
// var boo = new Employee("Boo", "11435", "54000", 3);
// var scout = new Employee("Scout", "6243", "74750", 5);

// console.log(newEmployeeArray);
//
// console.log(newEmployeeArray[0][0]);
// console.log(newEmployeeArray[1][0]);
//
//
//
// console.log(newEmployeeArray[0][1]);

console.log(atticus);
console.log(jem);
console.log(boo);
console.log(scout);

function calcBonus(singleEmployee) {
    var employeeName = singleEmployee[0];
    var employeeNumber = singleEmployee[1];

    var employeeSalary = singleEmployee[2];
    var employeeRating = singleEmployee[3];
    var employeeBonus;

    //console.log(singleEmployee[i][0]);
    console.log('Employee Name:', employeeName);
    console.log('Employee Number:', employeeNumber);
    console.log('Employee Salary:', employeeSalary);
    console.log('Employee Rating:', employeeRating);

    switch (employeeRating) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            employeeBonus = .04;
            break;
        case 4:
            employeeBonus = .06;
            break;
        case 5:
            employeeBonus = .1;
            break;
        default:
            console.log("I have no idea what the bonus is.");
            break; //break statement optional on default case
    }

    if (employeeNumber.length <= 4) {
        employeeBonus = employeeBonus + .05;
    }
    if (employeeSalary > 65000) {
        employeeBonus = employeeBonus - .01;
    }
    if (employeeBonus >= .13) {
        employeeBonus = 0.13;
    }
    console.log("Employee Bonus", employeeBonus);
}
//iterate over employees array
//console.log each array index

(var i = 0; i <= employee.length i++) {

  console.log();
}
