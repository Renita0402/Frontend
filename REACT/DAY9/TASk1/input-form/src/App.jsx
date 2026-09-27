import { useState } from "react"; 

const App = () => {

const [name, setName] = useState(""); 

const handleChange = (e) => 
  { setName(e.target.value); }; 
return ( 
<> 
<div>
   <input type="text" onChange={handleChange} value={name} placeholder="Enter the Name" />
</div> 

    <p>{name}</p>
     </>
      ); };
export default App;