import { useState } from "react"; 
const App = () => { 
const [email, setEmail] = useState(""); 
const [showEmail, setShowEmail] = useState(""); 
const handleChange = (e) => 
  { 
  setEmail(e.target.value); 
}; 
const handleSubmit = (e) =>
{ e.preventDefault(); 
  setShowEmail(email); 
}; return ( 
<> 
<form onSubmit={handleSubmit}> 
  <input type="email" onChange={handleChange} value={email} placeholder="Enter the Email" /> 
  <button type="submit"> Submit </button> 
  </form> <p>{showEmail}</p> 
  </> 
  ); }; 
  export default App;