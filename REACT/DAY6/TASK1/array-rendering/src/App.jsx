const App = () => {

const Courses = ["Fullstack","DAta Analaytics","Cloud computing","Data science","computer networks"]

  return (
    <> 
    <div className = "bg-purple-400 flex gap-20 p-30 ">
      
      {Courses.map((e,i)=>(
        <div className = "bg-gray-300 h-50 w-100 flex  justify-center text-center items-center rounded-3xl  " key={i}>
        <p>{e}</p>
        </div>

      ))}
      
       </div>
    </>
  )
}

export default App