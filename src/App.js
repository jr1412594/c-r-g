import ExpensesContainer from "./components/Expenses/ExpensesContainer";
import NewExpense from "./components/NewExpense/NexExpense";

const App = () => {

    const expenses = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
        {
            id: "e5",
            title: "Dog Cone",
            amount: 11.99,
            date: new Date(2019, 6, 6),
        },
    ];

    const addExpense = (expenseToAdd) => {
      console.log(expenseToAdd, " :from app")
      return [...expenses, expenseToAdd];
      // console.log(newExpenses, " :Expenses AD.")
    }

    return (
        <div>
            <h2>Let's get started!</h2>
            <NewExpense addExpense={addExpense}/>
            <ExpensesContainer expenses={expenses} />
        </div>
    );
}

export default App;
