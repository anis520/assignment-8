import { useContext, useEffect, useState } from "react";
import { appContext } from "../context/appContext";
import { Link } from "react-router-dom";
import Header from "./Header";

const Income = () => {
  const { income, setIncome } = useContext(appContext);

  const [input, setInput] = useState({
    name: "",
    amount: "",
  });

  const handleIncome = () => {
    if (input.name && input.amount) {
      setIncome([...income, input]);
      setInput({
        name: "",
        amount: "",
      });
    } else {
      alert("All feilds are requered");
    }
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
      <Header />

      <div className="flex gap-4 mx-4">
        <div className=" w-7/12  bg-green-400 text-white p-5 font-semibold ">
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
        <div className="border w-5/12 p-4 h-fit">
          <p>Name :</p>
          <input
            name="name"
            placeholder="Name "
            className="border w-full px-2 my-2 rounded-md text-gray-600"
            value={input.name}
            onChange={hangleOnChange}
            type="text"
          />
          <p>Amount :</p>
          <input
            placeholder="Amount "
            name="amount"
            className="border w-full px-2 my-2 rounded-md text-gray-600"
            value={input.amount}
            onChange={hangleOnChange}
            type="text"
          />
          <button
            className="block bg-blue-500 w-full p-1  cursor-pointer rounded-md font-semibold text-white"
            onClick={handleIncome}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Income;
