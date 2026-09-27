import { useState } from "react";

const App = () => {

  const [title,setTitle] = useState("This is react")
 
  const [isActive,setIsActive] = useState(true)

  const changetext = ()=>{

      setTitle("This is Fromtend Development")

  }

  const SHowText = ()=>{

    setIsActive(!isActive)

  }

  return (
    <>

    <h3>{title}</h3>
    <button onClick={changetext}>Click To change</button>
    
      
    {isActive&&<p>This is React Framework</p>}  

    <button onClick={SHowText}>{isActive?"Show":"Hide"}</button>
    </>
  )
}

export default App