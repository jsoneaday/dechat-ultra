import Home from "./components/home/Home";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
