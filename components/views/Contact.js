import html from "html-literal";

export default () => html`
  <section id="contact">
    <div class="userInputs">
      <form id="contact" method="POST" action="https://formspree.io/f/xkndqywb">
        <div id="mail">
          <label for="userEmail"></label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div id="subject">
          <label for="userSubject"></label>
          <input
            type="text"
            name="userSubject"
            id="userSubject"
            placeholder="Enter the subject"
            required
          />
        </div>
        <div id="message">
          <label for="userMessage"></label>
          <textarea
            id="userMessage"
            name="userMessage"
            rows="5"
            cols="80"
            id="TITLE"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div class="submit">
          <button type="submit" id="submitButton">submit</button>
        </div>
      </form>
    </div>
    <div class="socialMedia">
      <p>Find me on social media</p>
      <a class="contact" href="https://github.com/amorgan754/">Github</a>
      <a
        class="contact"
        href="https://www.linkedin.com/in/ashley-morgan-92a75111a/"
        >LinkedIn</a
      >
    </div>
  </section>
`;
