const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  icon: {type: String },
  source: { type: String, required: true }, //like salay,stocks etc like shiva gets 1000 by stock 
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
},{timestamps:true});

module.exports = mongoose.model("Income", IncomeSchema);
