import html from "html-literal";

export default () => html`
  <section id="loginPage">
    <div class="login">
      <h1 id="loginInfo">Enter the following to log in</h1>
      <form id="login" method="POST" action="">
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
          <!-- <div class="register"> -->
          <input type="submit" id="registerButton" value="Register" />
          <!-- </div> -->
          <!-- <div class="submit"> -->
          <input type="submit" id="loginSubmitButton" value="Submit" />
          <!-- </div> -->
        </span>
      </form>
    </div>
  </section>
`;
