import React, { useState } from 'react';
import { IoMdDocument } from 'react-icons/io';
import { LuArrowUp, LuTrash2, LuPlus, LuArrowLeft } from 'react-icons/lu';

const IncomeTransactions = ({ transactions, onAddIncome, onDeleteIncome }) => {
  const transactionList = Array.isArray(transactions) ? transactions : [];
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactionList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(transactionList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleBackToDashboard = () => {
    window.location.href = '/dashboard'; // Adjust the route as needed
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-2xl p-6 border border-indigo-100">
      <div className="flex items-center justify-between mb-8">
        <h5 className="text-2xl font-bold text-indigo-900">Income Transactions</h5>
        <div className="flex items-center space-x-6"> {/* Increased space-x-6 for more gap */}
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300 flex items-center space-x-3 transform hover:scale-105"
            onClick={handleBackToDashboard}
          >
            <LuArrowLeft className="text-lg" />
            <span className="text-base font-medium">Back to Dashboard</span>
          </button>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center space-x-2 transition duration-300"
            onClick={onAddIncome}
          >
            <LuPlus className="text-base" />
            <span className="text-sm">Add Income</span>
          </button>
        </div>
      </div>
      <div className="mt-6 space-y-5">
        {currentTransactions.length > 0 ? (
          currentTransactions.map((item) => (
            <IncomeTransactionCard
              key={item._id}
              title={item.source || "Income"}
              icon={item.icon ? item.icon : <IoMdDocument className="text-indigo-500" />}
              date={new Date(item.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              amount={item.amount}
              onDelete={() => onDeleteIncome(item._id)}
            />
          ))
        ) : (
          <p className="text-gray-600 text-center">No income transactions available</p>
        )}
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center space-x-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-lg ${currentPage === page ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition duration-300`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

const IncomeTransactionCard = ({ title, icon, date, amount, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-100 hover:bg-indigo-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center space-x-5">
        <div className="p-3 bg-indigo-100 rounded-full">{icon}</div>
        <div>
          <h6 className="text-lg font-semibold text-gray-900">{title}</h6>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
      <div
        className="flex items-center space-x-2 p-2 rounded-lg text-green-600"
        style={{
          background: "linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(34, 197, 94, 0.1))",
          backdropFilter: "blur(10px)",
        }}
      >
        <LuArrowUp />
        <span className="text-lg font-bold">+₹{amount}</span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 ml-4"
        onClick={onDelete}
      >
        <LuTrash2 className="text-lg" />
      </button>
    </div>
  );
};

export default IncomeTransactions;
