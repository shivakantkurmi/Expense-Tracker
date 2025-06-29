import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Last30DaysExpense = ({ transactions }) => {
  // Ensure transactions is an array, default to empty array if not
  const transactionList = Array.isArray(transactions) ? transactions : [];

  // Group expenses by category for the chart
  const getCategoryTotals = () => {
    const totals = {};
    transactionList.forEach((t) => {
      const category = t.category || "Uncategorized";
      totals[category] = (totals[category] || 0) + Math.abs(t.amount);
    });
    return totals;
  };

  const categoryData = getCategoryTotals();
  const categories = Object.keys(categoryData);
  const amounts = Object.values(categoryData);

  // Set up chart data with a vibrant red for expenses
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: amounts,
        backgroundColor: "rgba(239, 68, 68, 0.6)", // Soft red for bars
        borderColor: "rgba(239, 68, 68, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(239, 68, 68, 0.8)", // Slightly darker on hover
        borderRadius: 6, // Rounded bars for a modern look
      },
    ],
  };

  // Customize chart to match the sleek vibe
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
          color: "#1F2937", // Dark gray for text
          padding: 15,
        },
      },
      title: {
        display: true,
        text: "Expenses Over Last 30 Days",
        font: {
          size: 20,
          weight: "bold",
          family: "'Inter', sans-serif",
        },
        color: "#1E3A8A", // Indigo for title
        padding: {
          bottom: 25,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(55, 65, 81, 0.95)", // Dark gray with slight transparency
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
        boxPadding: 6,
        callbacks: {
          label: (context) => `₹${context.parsed.y.toFixed(2)}`,
          title: (tooltipItems) => tooltipItems[0].label,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#4B5563", // Muted gray for labels
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
        grid: {
          display: false, // Clean look, no grid on x-axis
        },
      },
      y: {
        ticks: {
          color: "#4B5563",
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          callback: (value) => `₹${value}`, // Rupee symbol for y-axis
        },
        grid: {
          color: "rgba(209, 213, 219, 0.3)", // Light gray grid lines
        },
        title: {
          display: true,
          text: "Amount (₹)",
          color: "#1E3A8A",
          font: {
            size: 14,
            family: "'Inter', sans-serif",
          },
        },
      },
    },
    animation: {
      duration: 1000, // Smooth animation for bars
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-2xl p-6 border border-indigo-100">
      <div className="mb-8">
        <h5 className="text-2xl font-bold text-indigo-900">Last 30 Days Expenses</h5>
      </div>
      <div className="mt-6">
        {transactionList.length > 0 ? (
          <div className="h-80 relative">
            <Bar data={chartData} options={chartOptions} />
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-sm text-gray-600">No expenses to show for the last 30 days.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Last30DaysExpense;