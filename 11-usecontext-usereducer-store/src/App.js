import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context-and-reducer/StoreContext";
import Basket from "./pages/Basket";
import Home from "./pages/Home";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
