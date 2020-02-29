import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import * as S from "./WaldoStyles";
import { Button } from "../../components";

import waldoCard from "./waldo-card.jpg";
import waldoGrid from "./waldo-grid.jpg";
import waldoHero from "./waldo-hero.jpg";
import waldoHomepage from "./waldo-homepage.jpg";
import waldoList from "./waldo-list.jpg";
import waldoProfile2 from "./waldo-profile-2.jpg";
import waldoProfile from "./waldo-profile.jpg";
import waldoTeam from "./waldo-team.jpg";
import waldoTeam2 from "./waldo-team-2.jpg";
import waldoTeams from "./waldo-teams.jpg";

export const Waldo = (): React.ReactElement => (
  <S.Container>
    <div>
      <img src={waldoHero} alt="Waldo Hero" />
      <Text>Waldo</Text>
    </div>
    <div>
      <div>
        Our friend Lukas came to Kaitlyn with an idea for making a tool to
        organize 3D Robotics‘s software department during our Hack Week. They
        were growing fast, and it’d would have been super helpful to have
        something that displayed everything that was going on while also having
        a cute UI.
      </div>
      <div>ENTER: WALDO</div>
      <div>
        Our team was called “Cat Paws”, which included:
        <ul>
          <li>Ed: Icon design.</li>
          <li>
            Lukas: Project manager spreadsheet overload + Apps script guru.
          </li>
          <li>
            Kaitlyn Hova: UI design + rails app master + front end development +
            staging/production server czar.
          </li>
          <li>
            Pancho: Kaitlyn's pair programming partner + “rubber duck”
            substitute. Specialized in quality control.
          </li>
        </ul>
      </div>
      <div>
        <Text typography="headingMedium">PROBLEMS TO ATTACK</Text>
      </div>
      <div>
        <ul>
          <li>
            Need an easy way to know who new people are and what team they are
            on.
          </li>
          <li>Need an easy way to see who is working on what projects.</li>
          <li>
            Super hate company wide emails that tell where a person is going if
            they are Out of the Office, so we wanted to show everyone's OOO
            status.
          </li>
          <li>
            Want to know who has what skill so that they may be a resource for
            said skill.
          </li>
          <li>Want to know who is Technical lead on teams. </li>
        </ul>
      </div>
      <div>
        <Text typography="headingMedium">WORKFLOW</Text>
      </div>
      <div>
        Because we didn’t want to have our Project Managers learn a new tool’s
        UI for inputing data, Lukas used google APIs to take a google
        spreadsheet and turn it into a hash that Kaitlyn could use in a rails
        app via Https request. This way, there is literally no difference in
        their workflow, and we just pretty up the data they already have.
      </div>
      <div>
        The data flow is as follows:
        <ul>
          <li>Google Spreadsheets –></li>
          <li>Apps Script –></li>
          <li>Google Calendar integration –></li>
          <li>Rails App</li>
        </ul>
        Names and projects have been changed on the portfolio site for security
        reasons.
      </div>
      <div>
        <Text typography="headingMedium">RESULTS</Text>
      </div>
      <div>
        We were the first (and only, to our knowledge) hack week project to make
        it to production!
      </div>
      <div>
        <Text typography="headingMedium">New UI</Text>
      </div>
      <div>
        Because we require oauth 2.0 sign in on the actual app (not the
        portfolio one you can see), I made a cute sign in page for the “welcome”
        page. I also made a little logo to go along with the title in the top
        nav.
      </div>
    </div>
    <Button
      title="Check it out"
      onPress={() => {}}
      href="https://waldo-rails.herokuapp.com/"
    />
    <div>
      <img src={waldoCard} alt="Waldo Card" style={{ height: "70vh" }} />
      <img src={waldoGrid} alt="Waldo Grid" style={{ height: "70vh" }} />
      <img
        src={waldoHomepage}
        alt="Waldo Homepage"
        style={{ height: "70vh" }}
      />
      <img src={waldoList} alt="Waldo List" style={{ height: "70vh" }} />
      <img
        src={waldoProfile2}
        alt="Waldo Profile2"
        style={{ height: "70vh" }}
      />
      <img src={waldoProfile} alt="Waldo Profile" style={{ height: "70vh" }} />
      <img src={waldoTeam} alt="Waldo Team" style={{ height: "70vh" }} />
      <img src={waldoTeam2} alt="Waldo Team2" style={{ height: "70vh" }} />
      <img src={waldoTeams} alt="Waldo Teams" style={{ height: "70vh" }} />
    </div>
  </S.Container>
);
