import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import { ContainerWithBorder } from "../../components/Container";
import { Button } from "../../components";
import { routes } from "../../routes";
import hydraprintDashboard from "./hydraprint-dashboard.jpg";
import hydraprintFilesList from "./hydraprint-files-list.jpg";
import hydraprintFiles from "./hydraprint-files.jpg";
import hydraprintHero from "./hydraprint-hero.jpg";
import hydraprintJob from "./hydraprint-job.jpg";
import hydraprintJobs from "./hydraprint-jobs.jpg";
import hydraprintJobsList from "./hydraprint-jobs-list.jpg";
import hydraprintTerminal from "./hydraprint-terminal.jpg";
import Layout from "../../components/layout";
import * as S from "./HydraprintStyles";

export const Hydraprint: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder
      backgroundImage={hydraprintHero}
      backgroundImageStyles={{ opacity: 0.2 }}
    >
      <Text typography="headingLarge">Hydraprint</Text>
      <Text typography="headingSmall">A host for talking to hardware.</Text>
      <S.ButtonPadding>
        <Button
          title="Check it out on Github"
          href={routes.PROJECT_HYDRAPRINT}
          onPress={() => {}}
        />
      </S.ButtonPadding>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <Text typography="bodyText">
        This is a 3D printer management system we got to work on for Autodesk.
        It's built on KOA, has postgreSQL for persistent data storage, and
        socket for real time updates. It's inspirations include OctoPrint,
        Repetier Host, and PrintRun. Kaitlyn designed and developed the Front
        End UI to solve a few problems with the current open source software
        available to manage prints:
      </Text>
      <ul>
        <li>
          <Text typography="bodyText">
            UIs can get cluttered quickly when you don't need much. We
            simplified the available options/features towards the general user.
            However, if you want to get creative, we added a terminal to enter
            gcode.
          </Text>
        </li>
        <li>
          <Text typography="bodyText">
            We wanted to build it to scale so that you can manage several
            printers and several jobs. No other open source 3D printing
            management software is equipped to do that right now.
          </Text>
        </li>
      </ul>
      <Text typography="bodyText">
        Our goal is to make this power 3d printers and jobs from anywhere, and
        to continue to tweak the UI to meet the average 3D printing user's
        needs.
      </Text>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <img src={hydraprintDashboard} alt="Hydraprint Dashboard" width="100%" />
      <img src={hydraprintFilesList} alt="Hydraprint FilesList" width="100%" />
      <img src={hydraprintFiles} alt="Hydraprint Files" width="100%" />
      <img src={hydraprintHero} alt="Hydraprint Hero" width="100%" />
      <img src={hydraprintJob} alt="Hydraprint Job" width="100%" />
      <img src={hydraprintJobs} alt="Hydraprint Jobs" width="100%" />
      <img src={hydraprintJobsList} alt="Hydraprint JobsList" width="100%" />
      <img src={hydraprintTerminal} alt="Hydraprint Terminal" width="100%" />
    </ContainerWithBorder>
  </Layout>
);
