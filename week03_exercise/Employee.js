//TODO - Create Employee Module here and export to use in index.js


let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

function getAllEmployees(){
    return employees;
}

function getEmployeeNames(){
    
     return employees.map(({ firstName, lastName }) => ({ firstName, lastName }));
}

function total_salary()
{
    initialvalue = 0;
    totalSalary = employees.reduce((accumulator, employeeTotal) => accumulator + employeeTotal.Salary, initialvalue);
    return {"total _salary": totalSalary};
}
module.exports = {
    getAllEmployees,
    getEmployeeNames,
    total_salary
}
