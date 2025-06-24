import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Expense = () => {
  const navigate = useNavigate();

  // State for expenses and form
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 200, category: 'Food', date: '2025-06-24' },
    { id: 2, amount: 300, category: 'Travel', date: '2025-06-23' },
  ]);
  const [newExpense, setNewExpense] = useState({ category: '', amount: '', date: '' });
  const totalExpenses = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    console.log('Logged out');
    navigate('/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (newExpense.category && newExpense.amount && newExpense.date) {
      const newEntry = {
        id: Date.now(), // Unique ID based on timestamp
        category: newExpense.category,
        amount: newExpense.amount,
        date: newExpense.date,
      };
      setExpenses((prev) => [...prev, newEntry]);
      setNewExpense({ category: '', amount: '', date: '' }); // Reset form
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Side Menu */}
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-6">Expense Tracker</h2>
        <ul className="space-y-4">
          <li
            className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => navigateTo('/dashboard')}
          >
            🏠 Home
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => navigateTo('/income')}
          >
            💰 Income
          </li>
          <li
            className="flex items-center p-2 hover:bg-red-700 rounded cursor-pointer"
            onClick={handleLogout}
          >
            🚪 Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Expense
        </h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-300">Total Expenses</h3>
          <p className="text-2xl font-bold text-red-300">₹{totalExpenses}</p>
        </div>
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-300">Expense List</h3>
          <ul className="mt-4 space-y-4">
            {expenses.map((expense) => (
              <li key={expense.id} className="text-gray-200">
                ₹{expense.amount} - {expense.category} ({expense.date})
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-300">Add Expense</h3>
          <form onSubmit={handleAddExpense} className="mt-4 space-y-4">
            <input
              type="text"
              name="category"
              value={newExpense.category}
              onChange={handleInputChange}
              placeholder="Category (e.g., Food)"
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
            <input
              type="number"
              name="amount"
              value={newExpense.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={newExpense.date}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
            >
              Add Expense
            </button>
          </form>
        </div>
        <button
          className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
          onClick={() => navigateTo('/dashboard')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Expense;