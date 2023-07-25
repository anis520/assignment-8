import { useEffect, useState } from "react";

const Expense = () => {
  const [input, setInput] = useState({
    name: "",
    amount: "",
  });
  const [expense, setExpense] = useState([]);

  const handleIncome = () => {
    setExpense([...expense, input]);
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
      <h1>User Expense</h1>
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
      {expense.map((data, i) => {
        return (
          <p key={i}>
            {data.name} : {data.amount}
          </p>
        );
      })}
      Total Amount :
      {(() => {
        const sum = expense.reduce((accumulator, currentValue) => {
          console.log(accumulator, currentValue);
          return accumulator + +currentValue.amount;
        }, 0);
        return sum;
      })()}
    </div>
  );
};

export default Expense;
