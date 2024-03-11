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
