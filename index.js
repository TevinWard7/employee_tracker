const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    StartQuestions();
});

const StartQuestions = () => {
    inquirer
        .prompt({
            name: "first-question",
            type: "list",
            message: "What would you like to do?",
            choices: ["View all departments", "View all roles", "View all employees", "Add employee", "Update employee role", "Remove employee"]
        }).then(answer => {
            switch (answer["first-question"]) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "Update employee role":
                    updateEmployeeRole();
                    break;
                case "Remove employee":
                    removeEmployee();
                    break;
                default:
                    break;
            }
        })
};

const viewAllDepartments = () => {
    const query = "SELECT * FROM department;";
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach(r => {
            console.table([
                {
                    id: r.id,
                    name: r.name
                },
            ]);
        });
    });
};

const viewAllRoles = () => {
    const query = "SELECT * FROM role;";
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach(r => {
            console.table([
                {
                    id: r.id,
                    title: r.title,
                    salary: r.salary
                },
            ]);
        });
    });
};

const viewAllEmployees = () => {
    const query = "SELECT * FROM employee;";
    connection.query(query, (err, res) => {
        if (err) throw err;
        res.forEach(r => {
            console.table([
                {
                    id: r.id,
                    first_name: r.first_name,
                    last_name: r.last_name,
                    role: r.role,
                    manager: r.manager
                },
            ]);
        });
    });
};