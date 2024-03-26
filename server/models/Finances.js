import mongoose from "mongoose";

const financeSchema = new mongoose.Schema({
  financeName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  cost: {
    type: Number,
    required: true,
    validate: /^[0-9 ]*$/
  },
  runningTotal: {
    type: Number,
    validate: /^[0-9 ]*$/
  },
  type: {
    type: String,
    required: true,
    enum: ["debit", "income"]
  },
  toppings: [String]
});

const Finance = mongoose.model("Pizza", financeSchema);

export default Finance;
