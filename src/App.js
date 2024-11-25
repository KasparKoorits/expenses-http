import "./App.css";
import Expenses from "./components/Expenses.js";
import ExpensesFilter from "./components/Expenses/ExpensesFilter.js";

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: "New book",
      price: 30.99,
    },
    {
      date: new Date(2024, 10, 12),
      title: "New jeans",
      price: 99.99,
    },
  ];

  return <Expenses data={expenses} />;
};

export default App;
