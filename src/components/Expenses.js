import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "./Card.js";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem data={props.data[0]} />
      <ExpenseItem data={props.data[1]} />
    </Card>
  );
};

export default Expenses;
