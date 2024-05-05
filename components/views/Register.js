import html from "html-literal";

export default () => html`
  <section id="registerPage">
    <div class="register">
      <h1 id="registerInfo">Enter the following to register</h1>
      <form id="register" method="POST" action="">
        <div id="username">
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            required
          />
        </div>
        <div id="password">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <span id="buttons">
          <input type="submit" id="registerSubmitButton" value="Submit" />
        </span>
      </form>
    </div>
  </section>
`;
