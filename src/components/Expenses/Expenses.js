import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    console.log("Filtering by year:", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expenseData={expense} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
