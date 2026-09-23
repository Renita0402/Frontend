const App = () => {

  const Student = {
    Name: "Renita",
    Age: 20,
    Course: "Fullstack",
    City: "Chennai"
  };

  return (
    <>
      <div className = "bg-purple-500 p-20 gap-30">
        <p>{Student.Name}</p>
        <p>{Student.Age}</p>
        <p>{Student.Course}</p>
        <p>{Student.City}</p>
      </div>
    </>
  );
};

export default App;