import html from "html-literal";
// create and import images based on weather (need to see what all descriptions there are)

export default state => html`
  <nav>
    <span id="weather">
      <!-- insert image here to be beside the description -->
      <p>
        The weather in ${state.weather.city} is ${state.weather.description}
        with a temperature of ${state.weather.temp}
      </p>
    </span>
    <span id="nav">
      <ul class="nav-links">
        ${state.links
          .map(
            link =>
              `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </span>
  </nav>
`;
