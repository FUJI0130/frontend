// frontend/src/components/ExpenseList.js
import React from 'react';

function ExpenseList({ expenses }) {
    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>
                        {expense.description}: ${expense.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
