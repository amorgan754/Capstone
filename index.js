import { Header, Nav, Main, Footer } from "./components";

// render function
function render() {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav()}
  ${Main()}
  ${Footer()}
  `;
}

render();
