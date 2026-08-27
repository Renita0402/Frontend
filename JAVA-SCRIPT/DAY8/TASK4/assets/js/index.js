let students = [
    { name: "Renita", mark: 85 },
    { name: "Sandhya", mark: 75 },
    { name: "Ramya", mark: 92 },
    { name: "pinky", mark: 68 },
    { name: "Ram", mark: 88 }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].mark > 80) {
        console.log(students[i].name);
    }
}