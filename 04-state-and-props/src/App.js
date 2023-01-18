import { useState } from "react";

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
      <p>Hi there, {username}</p>
      <p>{username}, you are doing great today</p>
    </>
  );
}

export default App;
