import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const RecentIncomeWithChart = ({ transactions, totalIncome }) => {
  const transactionList = Array.isArray(transactions) ? transactions : [];
  const getSourceTotals = () => {
    const totals = {};
    transactionList.forEach((t) => {
      const source = t.source || "Unspecified";
      totals[source] = (totals[source] || 0) + Math.abs(t.amount);
    });
    return totals;
  };

  const sourceData = getSourceTotals();
  const sources = Object.keys(sourceData);
  const amounts = Object.values(sourceData);

  const chartData = {
    labels: sources,
    datasets: [
      {
        label: "Income by Source",
        data: amounts,
        backgroundColor: [
          "rgba(34, 197, 94, 0.6)", 
          "rgba(59, 130, 246, 0.6)", 
          "rgba(249, 115, 22, 0.6)", 
          "rgba(139, 92, 246, 0.6)", 
          "rgba(239, 68, 68, 0.6)", 
        ],
        borderColor: [
          "rgba(34, 197, 94, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(249, 115, 22, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(239, 68, 68, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 20,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "'Inter', sans-serif",
          },
          color: "#1F2937", 
          padding: 15,
        },
      },
      title: {
        display: true,
        text: `Income (Last 60 Days): ₹${totalIncome.toFixed(2)}`,
        font: {
          size: 20,
          weight: "bold",
          family: "'Inter', sans-serif",
        },
        color: "#1E3A8A", 
        padding: {
          bottom: 25,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(55, 65, 81, 0.95)", 
        cornerRadius: 8,
        padding: 12,
        titleFont: {
          size: 14,
          family: "'Inter', sans-serif",
        },
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif",
        },
        callbacks: {
          label: (context) => `₹${context.parsed.toFixed(2)}`,
          title: (tooltipItems) => tooltipItems[0].label,
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.2)", 
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-2xl p-6 border border-indigo-100">
      <div className="mb-8">
        <h5 className="text-2xl font-bold text-indigo-900">Last 60 Days Income</h5>
      </div>
      <div className="mt-6">
        {transactionList.length > 0 ? (
          <div className="h-80 relative">
            <Pie data={chartData} options={chartOptions} />
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-sm text-gray-600">No income to show for the last 60 days.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentIncomeWithChart;