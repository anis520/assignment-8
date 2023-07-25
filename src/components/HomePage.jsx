import { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../context/appContext";
import Expense from "./Expense ";
import Header from "./Header";

const HomePage = () => {
  const { income, expense } = useContext(appContext);
  return (
    <div>
      <Header />

      <div className="md:flex  gap-4 mx-4 ">
        <div className="md:w-6/12 bg-green-400 text-white p-5 font-semibold">
          <h2 className="text-green-400  bg-white p-2 rounded-md text-center ">
            Total Income
          </h2>
          <div className="space-y-2 my-2">
            {income.map((data, i) => (
              <p className="flex mx-3 justify-between" key={i}>
                <p>
                  {i + 1} . {data.name}
                </p>
                <p>
                  {" "}
                  :{"  "}
                  {data.amount} tk
                </p>
              </p>
            ))}
          </div>
          <hr />
          <p className="flex mx-3 justify-between">
            <p>Total Amount </p>
            <p>
              ={"  "}
              {(() => {
                const sum = income.reduce((accumulator, currentValue) => {
                  console.log(accumulator, currentValue);
                  return accumulator + +currentValue.amount;
                }, 0);
                return sum;
              })()}{" "}
              tk
            </p>
          </p>
        </div>{" "}
        <div className="md:w-6/12 bg-red-400 text-white p-5 font-semibold">
          <h2 className="text-red-400 bg-white p-2 rounded-md text-center">
            Total Expense
          </h2>
          <div className="space-y-2 my-2">
            {expense.map((data, i) => (
              <p className="flex mx-3 justify-between" key={i}>
                <p>
                  {i + 1} . {data.name}
                </p>
                <p>
                  {" "}
                  :{"  "}
                  {data.amount} tk
                </p>
              </p>
            ))}
          </div>
          <hr />
          <p className="flex mx-3 justify-between">
            <p>Total Amount </p>
            <p>
              ={"  "}
              {(() => {
                const sum = expense.reduce((accumulator, currentValue) => {
                  console.log(accumulator, currentValue);
                  return accumulator + +currentValue.amount;
                }, 0);
                return sum;
              })()}{" "}
              tk
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
