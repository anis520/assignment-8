import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/income">Income</Link>
      <Link to="/expense">Expense</Link>
    </div>
  );
};

export default HomePage;
