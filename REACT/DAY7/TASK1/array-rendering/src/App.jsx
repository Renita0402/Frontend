// const App = () => {

// const programing = ["Python","Java","Mern",".Net"]


//   return (
//     <>
//     <div>
//       {programing.map((e,i)=>(
//         <p>{e}</p>
//       ))}
      
//     </div>
//     </>
//   )
// }

// export default App




// const App = () => {

// const city = ["Chennai","Munbai","Delhi","Banglore","Hyderabad"]
//   return (
// <>
// {city.map((e,i)=>(
//   <li>
//     {e}
//   </li>
// ))}
// </>
//   )
// }

// export default App



const App = () => {
  const course = ["Fullstack","DataSience","DataAnalaytics","DataScience","CloudComputing"]
  return (
    <>
      <h1>Available Course</h1>
     <div style={{ display: "flex", gap: "10px" }}>
        {course.map((e, i) => (
          <div key={i}
            style={{
              border: "1px solid black",
              padding: "15px",
              borderRadius: "8px"
            }}
          >
            <p>{e}</p>
          </div>
        ))}
      </div>
    </>
  );
};
   
export default App