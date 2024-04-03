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
          <label for="start">Start Date and Time</label>
          <input id="start" name="start" type="datetime-local" />
        </div>
        <div>
          <label for="end">End Date and Time</label>
          <input id="end" name="end" type="datetime-local" />
        </div>
        <input type="submit" name="calendarSubmit" value="schedule" />
      </form>
    </div>
  </section>
`;
