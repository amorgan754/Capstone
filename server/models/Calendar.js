import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  startDate: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9-: ]*$/
  },
  startTime: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9-: ]*$/
  },
  endTime: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9-: ]*$/
  },
  endDate: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9-: ]*$/
  }
});

const Calendar = mongoose.model("Calendar", calendarSchema);

export default Calendar;
