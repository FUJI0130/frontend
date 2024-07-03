import React, { useState, useEffect } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import { getExpenses } from './services/api';

function App() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        async function fetchExpenses() {
            try {
                const response = await getExpenses();
                setExpenses(response.data);
            } catch (error) {
                console.error('Error fetching expenses:', error); // エラーハンドリングを追加
            }
        }
        fetchExpenses();
    }, []);

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Household Accounting App</h1>
            </header>
            <main>
                <ExpenseForm onAddExpense={handleAddExpense} />
                <ExpenseList expenses={expenses} />
            </main>
        </div>
    );
}

export default App;
