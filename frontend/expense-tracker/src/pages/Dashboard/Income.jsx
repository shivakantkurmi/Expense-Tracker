import React from 'react';
import { useNavigate } from 'react-router-dom';

const Income = () => {
  const navigate = useNavigate();

  // Placeholder data
  const incomes = [
    { id: 1, amount: 300, source: 'Salary', date: '2025-06-24' },
    { id: 2, amount: 700, source: 'Freelance', date: '2025-06-23' },
  ];
  const totalIncome = incomes.reduce((sum, inc) => sum + inc.amount, 0);

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
            onClick={() => navigateTo('/home')}
          >
            🏠 Home
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
          Income
        </h1>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-white">Total Income</h3>
          <p className="text-2xl font-bold text-green-300">${totalIncome}</p>
        </div>
        <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-white">Income List</h3>
          <ul className="mt-4 space-y-4">
            {incomes.map((income) => (
              <li key={income.id} className="text-white">
                ${income.amount} - {income.source} ({income.date})
              </li>
            ))}
          </ul>
        </div>
        <button
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={() => navigateTo('/home')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Income;