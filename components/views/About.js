import html from "html-literal";

export default () => html`
  <section id="about">
    <div class="aboutProject">
      <p>
        Hello! Welcome to the Household Hub. This project started from a large
        group of people who all pitched in different ideas about what they do
        and don't need when it comes to keeping up to date with many things that
        go on in their households. Many agreed that having a place to keep
        finances, a calendar, and many other components that will be coming at
        some point would help them keep an idea of everything that was going on
        in their houses while they are both in their household as well as out of
        it. This project is something that will keep evolving and growing as
        time goes on. So I hope that you find something to help you as well!
      </p>
    </div>

    <div class="aboutMe">
      <p>
        A little about myself:
      </p>
      <p>
        I currently live in Washington with plans to move back to the midwest. I
        have been programming since 2021 where I started in python and slowly
        learned more about different languages where I then started my degree in
        Software Development and Security with a minor in cybersecurity. I enjoy
        learning more about different coding projects and applications as well
        as validating the security of different applications. Coding gives a
        bunch of different problems with even more ways to solve them. The
        challenge that surrounds it excites me and I love learning something new
        each time I work on any project! Fun fact about me: I'm obsessed with
        pigs!
      </p>
    </div>

    <div class="currentProjects">
      <p>Here are some things that I am currently working on:</p>
      <ul>
        <li class="project">
          <a href="https://github.com/amorgan754/Capstone"
            >Current Savvy Coders Capstone</a
          >
        </li>
        <li class="project">
          <a href="https://github.com/amorgan754/Job-Application-Tracker"
            >CLI menu driven job application tracker</a
          >
        </li>
        <li class="project">Final Bachelors Degree Capstone</li>
      </ul>
    </div>

    <div class="futureProjects">
      <p>
        I currently have a few projects that are in the works and will be
        started relatively soon
      </p>
      <ul>
        <li>
          Application to validate there is no malicious virus being injected via
          an upload
        </li>
        <ul>
          <li>This will be done through hash validation of known viruses.</li>
        </ul>
        <li>Revamp Captain B's website</li>
        <ul>
          <li>
            Capt. B is currently located in the suburbs of Chicago. Their web
            site will be modified to have a way to order from their site
          </li>
        </ul>
      </ul>
    </div>
  </section>
`;
