import { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../context/appContext";
import Expense from "./Expense ";

const HomePage = () => {
  const { income, expense } = useContext(appContext);
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/income">Income</Link>
      <Link to="/expense">Expense</Link>
      <hr />
      <h2>Total Income</h2>
      {income.map((data, i) => (
        <p key={i}>
          {data.name} : {data.amount}
        </p>
      ))}
      <hr />
      Total Amount :
      {(() => {
        const sum = income.reduce((accumulator, currentValue) => {
          console.log(accumulator, currentValue);
          return accumulator + +currentValue.amount;
        }, 0);
        return sum;
      })()}
      <hr />
      <hr />
      <hr />
      <h2>Total Expense</h2>
      {expense.map((data, i) => (
        <p key={i}>
          {data.name} : {data.amount}
        </p>
      ))}
      <hr />
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

export default HomePage;
