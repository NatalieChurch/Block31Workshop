// GET /employees/random sends a random employee from the array.
// Be very careful about where you write this middleware! A request is handled by the first handler with a matching route.

import express from 'express';
import employees from '#db/employees';

const app = express();

app.route('/employees/random').get((req, res) => {
    
    if (employees.length === 0) {
        return res.status(404).send("No employees found.");
    } 

    const random = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[random];

    res.json(randomEmployee);
  });


app.route('/employees/:id').get((req, res) => {
    
    const id = Number(req.params.id);
    const found = employees.find(emp => emp.id === id);

    if(found) {
        res.json(found)
    } else {
        res.status(404).send("No employee with that id found.")
    }
  });

app.route('/employees').get((req, res) => {
    res.send(employees);
  });


app.route('/').get((req, res) => {
    res.send("Hello employees!");
  });



export default app

