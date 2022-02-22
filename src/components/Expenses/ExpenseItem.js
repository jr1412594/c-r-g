import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {

    const { title, amount, date } = expense;
    const [newTitle, setNewTitle] = useState(title)


    const clickHandler = () => {
        setNewTitle('I was clicked');
        console.log(newTitle);
    } 

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item_description">
                <h2>{newTitle}</h2>
                <div className="expense-item_price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
