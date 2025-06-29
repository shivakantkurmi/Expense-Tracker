import React from "react";
import { IoMdDocument } from "react-icons/io";
import { LuArrowUp } from "react-icons/lu";

const IncomeTransactions = ({ transactions, onSeeMore }) => {
  const transactionList = Array.isArray(transactions) ? transactions : [];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-2xl p-6 border border-indigo-100">
      <div className="flex items-center justify-between mb-8">
        <h5 className="text-2xl font-bold text-indigo-900">Recent Income Transactions</h5>
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300 flex items-center space-x-3 transform hover:scale-105"
          onClick={onSeeMore}
        >
          <span className="text-base font-medium">See All</span>
          <LuArrowUp className="text-lg" />
        </button>
      </div>
      <div className="mt-6 space-y-5">
        {transactionList.length > 0 ? (
          transactionList.map((item) => (
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
            />
          ))
        ) : (
          <p className="text-gray-600 text-center">No income transactions available</p>
        )}
      </div>
    </div>
  );
};

const IncomeTransactionCard = ({ title, icon, date, amount }) => {
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
    </div>
  );
};

export default IncomeTransactions;