import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Income from "./components/Income";
import Expense from "./components/Expense ";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
