import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import * as S from "./WaldoStyles";
import { Button } from "../../components";
import { ContainerWithBorder } from "../../components/Container";
import { routes } from "../../routes";

// IMAGES
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
import Layout from "../../components/layout";

export const Waldo: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder
      backgroundImage={waldoHero}
      backgroundImageStyles={{ opacity: 0.2 }}
    >
      <Text typography="headingLarge">Waldo</Text>
      <Text typography="headingSmall">Organize your startup</Text>
      <S.ButtonPadding>
        <Button
          href={routes.PROJECT_WALDO}
          onPress={() => {}}
          title="Check it out"
        />
      </S.ButtonPadding>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <Text typography="bodyText">
        Our friend Lukas came to Kaitlyn with an idea for making a tool to
        organize 3D Robotics‘s software department during our Hack Week. They
        were growing fast, and it’d would have been super helpful to have
        something that displayed everything that was going on while also having
        a cute UI.
      </Text>
      <Text typography="bodyText">ENTER: WALDO</Text>
      <Text typography="bodyText">
        Our team was called “Cat Paws”, which included:
      </Text>
      <ul>
        <li>
          <Text typography="bodyText">Ed: Icon design.</Text>
        </li>
        <li>
          <Text typography="bodyText">
            Lukas: Project manager spreadsheet overload + Apps script guru.
          </Text>
        </li>
        <li>
          <Text typography="bodyText">
            Kaitlyn Hova: UI design + rails app master + front end development +
            staging/production server czar.
          </Text>
        </li>
        <li>
          <Text typography="bodyText">
            Pancho: Kaitlyn's pair programming partner + “rubber duck”
            substitute. Specialized in quality control.
          </Text>
        </li>
      </ul>
      <Text typography="headingMedium">Project Requirements</Text>
      <ul>
        <li>
          {" "}
          <Text typography="bodyText">
            Need an easy way to know who new people are and what team they are
            on.
          </Text>
        </li>
        <li>
          {" "}
          <Text typography="bodyText">
            Need an easy way to see who is working on what projects.
          </Text>
        </li>
        <li>
          <Text typography="bodyText">
            Super hate company wide emails that tell where a person is going if
            they are Out of the Office, so we wanted to show everyone's OOO
            status.
          </Text>
        </li>
        <li>
          <Text typography="bodyText">
            Want to know who has what skill so that they may be a resource for
            said skill.
          </Text>
        </li>
        <li>
          <Text typography="bodyText">
            Want to know who is Technical lead on teams.
          </Text>
        </li>
      </ul>
      <Text typography="headingMedium">Workflow</Text>
      <Text typography="bodyText">
        Because we didn’t want to have our Project Managers learn a new tool’s
        UI for inputing data, Lukas used google APIs to take a google
        spreadsheet and turn it into a hash that Kaitlyn could use in a rails
        app via Https request. This way, there is literally no difference in
        their workflow, and we just pretty up the data they already have.
      </Text>
      <Text typography="bodyText">The data flow is as follows:</Text>
      <ul>
        <li>
          <Text typography="bodyText">Google Spreadsheets –></Text>
        </li>
        <li>
          <Text typography="bodyText">Apps Script –></Text>
        </li>
        <li>
          <Text typography="bodyText">Google Calendar integration –></Text>
        </li>
        <li>
          <Text typography="bodyText">Rails App</Text>
        </li>
      </ul>
      <Text typography="bodyText">
        Names and projects have been changed on the portfolio site for security
        reasons.
      </Text>
      <Text typography="headingMedium">Results</Text>

      <Text typography="bodyText">
        We were the first (and only, to our knowledge) hack week project to make
        it to production!
      </Text>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <img src={waldoCard} alt="Waldo Card" width="100%" />
      <img src={waldoGrid} alt="Waldo Grid" width="100%" />
      <img src={waldoHomepage} alt="Waldo Homepage" width="100%" />
      <img src={waldoList} alt="Waldo List" width="100%" />
      <img src={waldoProfile2} alt="Waldo Profile2" width="100%" />
      <img src={waldoProfile} alt="Waldo Profile" width="100%" />
      <img src={waldoTeam} alt="Waldo Team" width="100%" />
      <img src={waldoTeam2} alt="Waldo Team2" width="100%" />
      <img src={waldoTeams} alt="Waldo Teams" width="100%" />
    </ContainerWithBorder>
  </Layout>
);
