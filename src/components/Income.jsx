import { useEffect, useState } from "react";

const Income = () => {
  const [input, setInput] = useState("");
  const [income, setIncome] = useState([]);

  const handleIncome = () => {
    setIncome([...income, input]);
    setInput("");
  };

  useEffect(() => {}, [setInput]);

  return (
    <div>
      <h1>UserIncome</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={handleIncome}>Add</button>
    </div>
  );
};

export default Income;
