Create Database EmployeeDB;
Use EmployeeDB;
CREATE TABLE Employee (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    email VARCHAR(100),
    age INT,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    joining_date DATE
);