import { createContext, useState } from "react";

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  return (
    <appContext.Provider value={{ income, setIncome, expense, setExpense }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;
