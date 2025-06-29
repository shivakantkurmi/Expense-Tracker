import React from "react";
import { IoMdDocument } from "react-icons/io";
import { LuArrowRight, LuArrowUp, LuArrowDown } from "react-icons/lu";

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-2xl p-6 border border-indigo-100">
      <div className="flex items-center justify-between mb-8">
        <h5 className="text-2xl font-bold text-indigo-900">Recent Transactions</h5>
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300 flex items-center space-x-3 transform hover:scale-105"
          onClick={onSeeMore}
        >
          <span className="text-base font-medium">See All</span> <LuArrowRight className="text-lg" />
        </button>
      </div>
      <div className="mt-6 space-y-5">
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === "expense" ? item.category : item.source}
            icon={item.icon ? item.icon : <IoMdDocument className="text-indigo-500" />}
            date={new Date(item.date).toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" })}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

const TransactionInfoCard = ({ title, icon, date, amount, type, hideDeleteBtn }) => {
  const amountStyle = type === "income" ? "text-green-600" : "text-red-600";
  const arrowIcon = type === "income" ? <LuArrowUp /> : <LuArrowDown />;
  const gradientStyle = type === "income"
    ? { background: "linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(34, 197, 94, 0.1))", backdropFilter: "blur(10px)" }
    : { background: "linear-gradient(135deg, rgba(239, 68, 68, 0.4), rgba(239, 68, 68, 0.1))", backdropFilter: "blur(10px)" };

  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-100 hover:bg-indigo-50 transition duration-300 transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center space-x-5">
        <div className="p-3 bg-indigo-100 rounded-full">{icon}</div>
        <div>
          <h6 className="text-lg font-semibold text-gray-900">{title}</h6>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
      <div className={`flex items-center space-x-2 p-2 rounded-lg ${amountStyle}`} style={gradientStyle}>
        {arrowIcon}
        <span className="text-lg font-bold">{type === "income" ? `+₹${amount}` : `-₹${amount}`}</span>
      </div>
    </div>
  );
};

export default RecentTransactions;