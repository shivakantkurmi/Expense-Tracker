import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Placeholder data
  const [totalExpenses, setTotalExpenses] = useState(500);
  const [totalIncome, setTotalIncome] = useState(1000);
  const currentMoney = totalIncome - totalExpenses;

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    console.log('Logged out');
    navigate('/login');
  };

  const handleAddIncome = () => {
    console.log('Navigate to Add Income');
    navigate('/income/add'); // Placeholder route
  };

  const handleAddExpense = () => {
    console.log('Navigate to Add Expense');
    navigate('/expense/add'); // Placeholder route
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Side Menu */}
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-6">Expense Tracker</h2>
        <ul className="space-y-4">
          <li
            className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => navigateTo('/income')}
          >
            💰 Income
          </li>
          <li
            className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => navigateTo('/expense')}
          >
            💸 Expense
          </li>
          <li
            className="flex items-center p-2 hover:bg-green-700 rounded cursor-pointer"
            onClick={handleAddIncome}
          >
            ➕ Add Income
          </li>
          <li
            className="flex items-center p-2 hover:bg-red-700 rounded cursor-pointer"
            onClick={handleAddExpense}
          >
            ➕ Add Expense
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
          Home
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">Current Money</h3>
            <p className="text-2xl font-bold text-green-300">₹{currentMoney}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">Total Income</h3>
            <p className="text-2xl font-bold text-green-300">₹{totalIncome}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-300">Total Expenses</h3>
            <p className="text-2xl font-bold text-red-300">₹{totalExpenses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;