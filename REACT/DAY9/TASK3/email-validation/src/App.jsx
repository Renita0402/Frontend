
import { useState } from "react";

const App = () => {

  const [age, setAge] = useState("");
  const [showAge, setShowAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age === "") {
      setShowAge("Age is required");
    } else {
      setShowAge(age);
      setAge("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type="number"onChange={handleChange}value={age} placeholder="Enter the Age"/>

        <button type="submit">Submit</button>

      </form>

      <p>{showAge}</p>
    </>
  );
};

export default App;
