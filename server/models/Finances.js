import mongoose from "mongoose";

const financeSchema = new mongoose.Schema({
  financeName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  cost: {
    type: String,
    required: true,
    validate: /^[0-9.-]*$/
  },
  runningTotal: {
    type: String,
    validate: /^[0-9.-]*$/
  },
  type: {
    type: String,
    required: true,
    enum: ["debit", "income"]
  }
});

const Finance = mongoose.model("Finances", financeSchema);

export default Finance;
