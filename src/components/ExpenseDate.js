import './ExpenseDate.css'

export default function ExpenseDate({ date }) {
    const [month, day, year] = [
        date.toLocaleString("default", { month: "long" }),
        date.toLocaleString("default", { day: "2-digit" }),
        date.getFullYear(),
    ];
    return (
        <div className="expense-date">
            <div className="expense-date_month">{month}</div>
            <div className="expense-date_year">{year}</div>
            <div className="expense-date_day">{day}</div>
        </div>
    );
}
