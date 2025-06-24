import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Placeholder data
  const totalExpenses = 500;
  const totalIncome = 1000;
  const balance = totalIncome - totalExpenses;

  // Handle Navigation
  const navigateTo = (path) => {
    navigate(path);
  };

  // Handle Logout
  const handleLogout = () => {
    // Add your logout logic here (e.g., clear token, redirect to login)
    console.log('Logged out');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      {/* Side Menu */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-purple-700 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Expense Tracker</h2>
        <ul className="space-y-4">
          <li
            className="flex items-center p-2 hover:bg-blue-700 rounded cursor-pointer"
            onClick={() => navigateTo('/income')}
          >
            💰 Income
          </li>
          <li
            className="flex items-center p-2 hover:bg-blue-700 rounded cursor-pointer"
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
        <h1 className="text-3xl font-bold mb-6 text-white bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg">
          Home
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white">Balance</h3>
            <p className="text-2xl font-bold text-green-300">${balance}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white">Total Income</h3>
            <p className="text-2xl font-bold text-green-300">${totalIncome}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white">Total Expenses</h3>
            <p className="text-2xl font-bold text-red-300">${totalExpenses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;