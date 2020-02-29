import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import { Button } from "../../components";
import hydraprintDashboard from "./hydraprint-dashboard.jpg";
import hydraprintFilesList from "./hydraprint-files-list.jpg";
import hydraprintFiles from "./hydraprint-files.jpg";
import hydraprintHero from "./hydraprint-hero.jpg";
import hydraprintJob from "./hydraprint-job.jpg";
import hydraprintJobs from "./hydraprint-jobs.jpg";
import hydraprintJobsList from "./hydraprint-jobs-list.jpg";
import hydraprintTerminal from "./hydraprint-terminal.jpg";

export const Hydraprint = (): React.ReactElement => (
  <div style={{ marginTop: 120 }}>
    <div>
      <img src={hydraprintHero} alt="hydraprint" style={{ height: 200 }} />
    </div>
    <div>
      <Text typography="headingLarge">A host for talking to hardware. </Text>
    </div>
    <div>
      <Text>
        This is a 3D printer management system we got to work on for Autodesk.
        It's built on KOA, has postgreSQL for persistent data storage, and
        socket for real time updates. It's inspirations include OctoPrint,
        Repetier Host, and PrintRun. Kaitlyn designed and developed the Front
        End UI to solve a few problems with the current open source software
        available to manage prints:
      </Text>
      <ul>
        <li>
          UIs can get cluttered quickly when you don't need much. We simplified
          the available options/features towards the general user. However, if
          you want to get creative, we added a terminal to enter gcode.
        </li>
        <li>
          We wanted to build it to scale so that you can manage several printers
          and several jobs. No other open source 3D printing management software
          is equipped to do that right now.
        </li>
      </ul>
      Our goal is to make this power 3d printers and jobs from anywhere, and to
      continue to tweak the UI to meet the average 3D printing user's needs.
    </div>
    <Button
      title="Check it out on Github"
      href="https://github.com/Autodesk/machine-collaboration-utility"
      onPress={() => {}}
    />
    <img
      src={hydraprintDashboard}
      alt="Hydraprint Dashboard"
      style={{ height: "70vh" }}
    />
    <img
      src={hydraprintFilesList}
      alt="Hydraprint FilesList"
      style={{ height: "70vh" }}
    />
    <img
      src={hydraprintFiles}
      alt="Hydraprint Files"
      style={{ height: "70vh" }}
    />
    <img
      src={hydraprintHero}
      alt="Hydraprint Hero"
      style={{ height: "70vh" }}
    />
    <img src={hydraprintJob} alt="Hydraprint Job" style={{ height: "70vh" }} />
    <img
      src={hydraprintJobs}
      alt="Hydraprint Jobs"
      style={{ height: "70vh" }}
    />
    <img
      src={hydraprintJobsList}
      alt="Hydraprint JobsList"
      style={{ height: "70vh" }}
    />
    <img
      src={hydraprintTerminal}
      alt="Hydraprint Terminal"
      style={{ height: "70vh" }}
    />
  </div>
);
