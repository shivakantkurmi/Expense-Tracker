import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideMenu = ({ activeMenu }) => {
  const navigate = useNavigate();

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
    <div className="w-64 bg-gradient-to-b from-blue-600 to-purple-700 text-white p-4 h-full">
      <h2 className="text-2xl font-bold mb-6">Expense Tracker</h2>
      <ul className="space-y-4">
        <li
          className={`flex items-center p-2 rounded cursor-pointer ${
            activeMenu === 'income' ? 'bg-blue-700' : 'hover:bg-blue-700'
          }`}
          onClick={() => navigateTo('/income')}
        >
          💰 Income
        </li>
        <li
          className={`flex items-center p-2 rounded cursor-pointer ${
            activeMenu === 'expense' ? 'bg-blue-700' : 'hover:bg-blue-700'
          }`}
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
  );
};

export default SideMenu;