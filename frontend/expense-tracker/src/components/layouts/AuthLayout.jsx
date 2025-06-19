import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left section: Branding */}
      <div className="w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold mb-4">Expense Tracker</h1>
        <p className="text-lg text-center max-w-sm">Welcome back! Manage your finances easily and securely.</p>
      </div>

      {/* Right section: Form */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
