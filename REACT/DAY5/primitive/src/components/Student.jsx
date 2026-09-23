const Student = () => {

  const studentName = "Renita";
  const age = 20;
  const course = "Fullstack Development";
  const isActive = true;
  const fees = 40000;
T
  return (
    <>
      <div>
        <h1>Primitive Rendering Methods</h1>
        <h2>Student Details</h2>

        <p>Student Name: {studentName}</p>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
        <p>Status: {isActive ? "Active" : "Inactive"}</p>
        <p>Fees: {fees}</p>
      </div>
    </>
  );
};

export default Student;