import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import Home from "../src/components/Home"
import Recommendations from "../src/components/Recommendations";
import Podcasts from "../src/components/Podcasts";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Shuri");

  return (
    <>
      <Router>
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/recommendations"
              element={<Recommendations />}
            />
            <Route
              path="/podcasts"
              element={<Podcasts />}
            />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
