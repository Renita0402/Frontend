const App = () => {
  const students = [

    {id: 8679,name: "Renita",age: 20,course: "Fullstack"},

    {id: 00862,name: "Ramya",age: 21,course: "Data Science"},

    {id: 07503,name: "Sandhya",age: 22,course: "Cloud Computing"},
    
    {id: 08004,name: "Karthik",age: 20,course: "Data Analytics"}
  ];

  return (
    <>
      <h1>Student Details</h1>

      {students.map((student) => (
        <div key={student.id}>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          
        </div>
      ))}
    </>
  );
};

export default App;