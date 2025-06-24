import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Income = () => {
  const navigate = useNavigate();

  // State for incomes and form
  const [incomes, setIncomes] = useState([
    { id: 1, amount: 300, source: 'Salary', date: '2025-06-24' },
    { id: 2, amount: 700, source: 'Freelance', date: '2025-06-23' },
  ]);
  const [newIncome, setNewIncome] = useState({ source: '', amount: '', date: '' });
  const totalIncome = incomes.reduce((sum, inc) => sum + Number(inc.amount), 0);

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
    setNewIncome((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (newIncome.source && newIncome.amount && newIncome.date) {
      const newEntry = {
        id: Date.now(), // Unique ID based on timestamp
        source: newIncome.source,
        amount: newIncome.amount,
        date: newIncome.date,
      };
      setIncomes((prev) => [...prev, newEntry]);
      setNewIncome({ source: '', amount: '', date: '' }); // Reset form
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
            onClick={() => navigateTo('/expense')}
          >
            💸 Expense
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
          Income
        </h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-300">Total Income</h3>
          <p className="text-2xl font-bold text-green-300">₹{totalIncome}</p>
        </div>
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-300">Income List</h3>
          <ul className="mt-4 space-y-4">
            {incomes.map((income) => (
              <li key={income.id} className="text-gray-200">
                ₹{income.amount} - {income.source} ({income.date})
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-300">Add Income</h3>
          <form onSubmit={handleAddIncome} className="mt-4 space-y-4">
            <input
              type="text"
              name="source"
              value={newIncome.source}
              onChange={handleInputChange}
              placeholder="Source (e.g., Salary)"
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
            <input
              type="number"
              name="amount"
              value={newIncome.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
            <input
              type="date"
              name="date"
              value={newIncome.date}
              onChange={handleInputChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            >
              Add Income
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

export default Income;