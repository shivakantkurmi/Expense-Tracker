const Expense = require("../models/Expense");

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
  res.json(expenses);
};

exports.addExpense = async (req, res) => {
  const { title, amount, category } = req.body;
  const expense = new Expense({ user: req.user.id, title, amount, category });
  await expense.save();
  res.json(expense);
};

exports.updateExpense = async (req, res) => {
  const expense = await Expense.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(expense);
};

exports.deleteExpense = async (req, res) => {
  await Expense.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: "Expense deleted" });
};
