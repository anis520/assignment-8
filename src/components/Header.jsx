import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../context/appContext";

const Header = () => {
  const { income, expense } = useContext(appContext);

  return (
    <>
      <div className="bg-indigo-400 p-3 flex">
        <img
          className="h-28 rounded-full  w-28"
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          alt=""
        />
        <div className="bg-white font-semibold py-2 text-black px-5 h-fit mt-6 ml-6 rounded-md">
          <p>Geaut user</p>
          <p className="text-sm text-gray-600 font-semibold">ID : 55425</p>
        </div>
        <div className="bg-white text-black ml-auto mr-24 rounded-md h-fit    ">
          <p className="p-5 bg-green-400 text-white font-semibold rounded-t-md">
            Total Income ={" "}
            {(() => {
              const sum = income.reduce((accumulator, currentValue) => {
                console.log(accumulator, currentValue);
                return accumulator + +currentValue.amount;
              }, 0);
              return sum;
            })()}
            tk
          </p>
          <p className="p-5 bg-red-400 text-white font-semibold rounded-b-md">
            Total Expense ={" "}
            {(() => {
              const sum = expense.reduce((accumulator, currentValue) => {
                console.log(accumulator, currentValue);
                return accumulator + +currentValue.amount;
              }, 0);
              return sum;
            })()}
            tk
          </p>
        </div>
      </div>
      <div className="flex p-2 gap-5 bg-white border mb-4 ps-4">
        <p className="bg-indigo-400 hover:bg-white border duration-200 hover:text-indigo-400 text-white px-2 font-semibold rounded-md cursor-pointer">
          <Link to={"/"}>Home</Link>
        </p>
        <p className="bg-indigo-400 hover:bg-white border duration-200 hover:text-indigo-400 text-white px-2 font-semibold rounded-md cursor-pointer">
          <Link to={"/income"}>Income</Link>
        </p>
        <p className="bg-indigo-400 hover:bg-white border duration-200 hover:text-indigo-400 text-white px-2 font-semibold rounded-md cursor-pointer">
          <Link to={"/expense"}>Expense</Link>
        </p>
      </div>
    </>
  );
};

export default Header;
