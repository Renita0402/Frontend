     const students = [];

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const cityInput = document.getElementById("city");
    const addStudentButton = document.getElementById("addStudent");
    const studentList = document.getElementById("studentList");

    addStudentButton.addEventListener("click",()=> {

      const name = nameInput.value;
      const age = ageInput.value;
      const city = cityInput.value;

      const student = {
        name: name,
        age: age,
        city: city
      };

      students.push(student);

      studentList.innerHTML = "";

      students.forEach(function(student) {

        const div = document.createElement("div");

        div.innerHTML = `<p>Name: ${student.name}</p> <p>Age: ${student.age}</p> <p>City: ${student.city}</p> <hr>`;

        studentList.appendChild(div);
      });

      nameInput.value = "";
      ageInput.value = "";
      cityInput.value = "";
    });