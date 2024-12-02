import "./App.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "id1",
      date: new Date(2023, 10, 12),
      title: "New book",
      amount: 30.99,
    },
    {
      id: "id2",
      date: new Date(2024, 10, 12),
      title: "New jeans",
      amount: 99.99,
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
