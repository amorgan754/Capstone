import html from "html-literal";
import pig from "../../assets/pig.png";

export default () => html`
  <section id="home">
    <div class="home">
      <h1>Welcome to Household Hub</h1>
      <p>
        This tracker is to help a wide range of people keep track of different
        household things, like finances and important dates.
      </p>
    </div>
    <img class="pig" src="${pig}" alt="surprise!" />
  </section>
`;
