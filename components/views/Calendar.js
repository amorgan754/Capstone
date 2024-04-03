import html from "html-literal";

const defaultStartDate = new Date();
const defaultEndDate = new Date();

defaultEndDate.setHours(defaultStartDate.getHours() + 1);

export default () => html`
  <section id="calendarContainer">
    <div id="calendar"></div>
    <div id="events">
      <h1 id="eventScheduler">
        Add the required information to add to the calendar
      </h1>
      <form id="scheduleEvents">
        <div>
          <label for="title"></label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Event Name"
            required
          />
        </div>
        <div>
          <label for="startDate">Start Date and Time</label>
          <input id="startDate" name="startDate" type="date" />
          <input id="startTime" name="startTime" type="time" />
        </div>
        <div>
          <label for="endDate">End Date and Time</label>
          <input id="endDate" name="endDate" type="date" />
          <input id="endTime" name="endTime" type="time" />
        </div>
        <input type="submit" name="calendarSubmit" value="schedule" />
      </form>
    </div>
  </section>
`;
