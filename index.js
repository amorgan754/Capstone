import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

// router
const router = new Navigo("/");

// render
function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Nav(store.Nav)}
      ${Main(state)}
      ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  if (state.view === "Finances") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);
      const requestData = {
        financeName: inputList.financeName.value,
        cost: inputList.cost.value,
        runningTotal: inputList.runningTotal.value,
        type: inputList.type.value
      };

      axios
        .post(`${process.env.API_URL}/finances`, requestData)
        .then(response => {
          store.Finances.finances.push(response.data);
          router.navigate("/finances");
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
  if (state.view === "Calendar") {
    // Add event submit button
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        title: inputList.title.value,
        start: inputList.start.value,
        end: inputList.end.value
      };

      axios
        .post(`${process.env.API_URL}/calendar`, requestData)
        .then(response => {
          store.Calendar.calendar.push(response.data);
          router.navigate("/calendar");
        })
        .catch(error => {
          console.log(error);
        });
    });
    // Need to add calendar here
    let calendarEl = document.getElementById("calendar");
    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,list"
      },
      selectable: true,
      editable: true,
      droppable: true,
      events: state.calendar || [],
      dayMaxEvents: 3,
      height: "auto",
      eventTextColor: "black",
      eventBackgroundColor: "#FFCAD4",
      eventClick: function handleEventClick(info) {
        alert(
          "Event: " +
            info.event.title +
            "\n" +
            "Start Time: " +
            info.event.start
        );
      }
    });
    calendar.render();
  }
}

router.hooks({
  before: async (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    try {
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?APPID=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=98327`
      );
      store.Nav.weather = {
        city: weatherData.data.name,
        temp: weatherData.data.main.temp,
        feelsLike: weatherData.data.main.feels_like,
        description: weatherData.data.weather[0].main
      };
    } catch (error) {
      console.log(error);
    }
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Calendar":
        // Try catch here
        try {
          axios
            .all([
              axios.get(`${process.env.API_URL}/calendar`),
              axios.get(`https://date.nager.at/api/v3/publicholidays/2024/US`)
            ])
            .then(
              axios.spread((responseOne, responseTwo) => {
                let allDates = [];
                const events = responseOne.data.map(event => {
                  return {
                    id: event._id,
                    title: event.title || event.customer,
                    start: new Date(event.start),
                    end: new Date(event.end),
                    allDay: false
                  };
                });
                const holidays = responseTwo.data.map(holiday => {
                  return {
                    title: holiday.name,
                    start: holiday.date,
                    allDay: true
                  };
                });
                allDates = events.concat(holidays);
                console.log(allDates);
                store.Calendar.calendar = allDates;
                done();
              })
            );
        } catch (error) {
          console.log(error);
          done();
        }
        break;
      case "Finances":
        // Try catch here, need to display the finance api
        // New Axios get request utilizing already made environment variable
        try {
          axios.get(`${process.env.API_URL}/finances`).then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.Finances.finances = response.data;
            done();
          });
        } catch (error) {
          console.log(error);
          done();
        }
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
