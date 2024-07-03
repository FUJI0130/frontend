import React, { useState } from 'react';
import { addExpense } from '../services/api';

function ExpenseForm({ onAddExpense }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const expense = { description, amount: parseFloat(amount) };
        console.log('Submitting expense:', expense); // デバッグ用に追加
        try {
            const response = await addExpense(expense);
            console.log('Response from server:', response.data);
            onAddExpense(response.data);
            setDescription('');
            setAmount('');
        } catch (error) {
            console.error('Error adding expense:', error); // エラーハンドリングを追加
            console.log('Error details:', error); // エラーの詳細をログ出力
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
