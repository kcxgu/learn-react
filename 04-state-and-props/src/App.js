import { useState } from "react";
import SQMConverter from "./sqmConverter";

function App() {
  const [username, setUsername] = useState("")

  const handleInput = e => {
    setUsername(e.target.value)
  }

  return (
    <>
      <h1>04 - State and Props</h1>
      <label htmlFor="username">Enter your name here:</label>
      <input
        id="username"
        type="text"
        placeholder="My wonderful name"
        onChange={handleInput}
      />
      <hr />
      <SQMConverter username={username} />
    </>
  );
}

export default App;
