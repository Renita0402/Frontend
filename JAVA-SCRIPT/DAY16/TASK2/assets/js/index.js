         const employees = [];

        const empName = document.getElementById("empName");
        const department = document.getElementById("department");
        const salary = document.getElementById("salary");
        const addEmployee = document.getElementById("addEmployee");
        const employeeList = document.getElementById("employeeList");

        addEmployee.addEventListener("click", () => {

            const name = empName.value;
            const dept = department.value;
            const salaryValue = salary.value;


            const employee = {
                name: name,
                department: dept,
                salary: salaryValue
            };


            employees.push(employee);


            employeeList.innerHTML = "";

            employees.forEach((employee) => {

                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                `;

                employeeList.appendChild(row);
            });

            empName.value = "";
            department.value = "";
            salary.value = "";

        });
