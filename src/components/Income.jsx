import { useContext, useEffect, useState } from "react";
import { appContext } from "../context/appContext";
import { Link } from "react-router-dom";

const Income = () => {
  const { income, setIncome } = useContext(appContext);

  const [input, setInput] = useState({
    name: "",
    amount: "",
  });

  const handleIncome = () => {
    setIncome([...income, input]);
    setInput({
      name: "",
      amount: "",
    });
  };

  const hangleOnChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {}, [setInput]);

  return (
    <div>
      <h1>User Income</h1>
      <input
        name="name"
        placeholder="Name"
        value={input.name}
        onChange={hangleOnChange}
        type="text"
      />
      <input
        name="amount"
        value={input.amount}
        onChange={hangleOnChange}
        type="number"
      />
      <button onClick={handleIncome}>Add</button>
      <Link to="/">Back</Link>
      {income.map((data, i) => {
        return (
          <p key={i}>
            {data.name} : {data.amount}
          </p>
        );
      })}
      Total Amount : {income == [] && 0}
      {(() => {
        const sum = income.reduce((accumulator, currentValue) => {
          console.log(accumulator, currentValue);
          return accumulator + +currentValue.amount;
        }, 0);
        return sum;
      })()}
    </div>
  );
};

export default Income;
