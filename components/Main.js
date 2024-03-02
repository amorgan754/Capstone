import html from "html-literal";
import * as views from "./views";

export default () => html`
  ${views["Home"]()} ${views["About"]()} ${views["Contact"]()}
  ${views["Calendar"]()} ${views["Finances"]()}
`;
