import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center px-4 py-10">

      {/* Header */}
      <div className="w-full text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-md">
          Expense Tracker
        </h1>
        <p className="text-md text-gray-300 mt-2">
          Welcome to Expense Tracker! Manage your finances securely and in style.
        </p>
        <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-24 mx-auto mt-4 rounded-full" />
      </div>

      {/* Dark Form Card */}
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8 text-white">
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;
