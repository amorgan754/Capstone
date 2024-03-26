import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

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
    document
      .getElementById("financeSubmitButton")
      .addEventListener("click", event => {
        event.preventDefault();

        const inputList = event.target.elements;

        const finance = [];

        for (let input of inputList.finance) {
          if (input.checked) {
            finance.push(input.value);
          }
        }

        const requestData = {
          financeName: inputList.financeName.value,
          cost: inputList.cost.value,
          runningTotal: inputList.runningTotal.value,
          type: inputList.type.value
        };

        axios
          .post(`${process.env.FINANCE_API_URL}/finances`, requestData)
          .then(response => {
            store.Finances.finances.push(response.data);
            router.navigate("/Finances");
          })
          .catch(error => {
            console.log("it puked", error);
          });
      });
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
        done();
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
