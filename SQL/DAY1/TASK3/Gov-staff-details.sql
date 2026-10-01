Create Database GovDB;
Use GovDB;
Create Table staffdata(
  staff_id INT PRIMARY KEY auto_increment,
  staff_name VARCHAR(30),
  staff_department VARCHAR(40),
  staff_salary VARCHAR(10)
);

INSERT into staffdata( staff_name,staff_department,staff_salary)values("Renita","Manager","70000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Ritika","GM","90000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Rajitha","AM","85000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Renisha","SM","70000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Reshama","ASM","75000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Sheeba","DM","70000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Sneha","TL","70000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Sandhya","OS","70000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Ramya","CEO","70000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("Priya","Tech lead","70000");
INSERT into staffdata( staff_name,staff_department,staff_salary)values("kizita","B.A","70000");
