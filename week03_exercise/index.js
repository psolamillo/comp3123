var http = require("http");
const employeeInfo = require("./Employee");
const { json } = require("stream/consumers");


//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081
const SERVER_HOST = 'localhost';


const server = http.createServer((req, res) => {
    if(req.url == "/"){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end('<h1>Welcome to Lab Exercise 03 </h1>');
    }

     if(req.url == "/employee"){
            res.writeHead(200, {'content-type': 'application/json'});
            const employeeDetails = employeeInfo.getAllEmployees();
            res.end(JSON.stringify(employeeDetails))
    }
    if (req.url === '/employee/names') {
            res.writeHead(200, {'content-type': 'application/json'})
            
            const employeeNames = employeeInfo.getEmployeeNames();
            res.end(JSON.stringify(employeeNames))
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]

        }
    if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.writeHead(200, {'content-type': 'application/json'})
            const total_salary = employeeInfo.total_salary();
            res.end(JSON.stringify(total_salary))
           
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Server running at http://${SERVER_HOST}:${port}/`)
})