import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Income from "./components/Income";
import Expense from "./components/Expense ";
import HomePage from "./components/HomePage";
import AppContextProvider from "./context/appContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
