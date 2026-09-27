
import { useState } from "react";

const App = () => {

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Search..."
        />
      </div>

      <p>You are searching for: {search}</p>
    </>
  );
};

export default App;

