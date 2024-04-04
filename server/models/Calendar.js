import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  start: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9-: ]*$/
  },
  end: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9-: ]*$/
  },
  allDay: {
    type: Boolean,
    required: false
  }
});

const Calendar = mongoose.model("Calendar", calendarSchema);

export default Calendar;
