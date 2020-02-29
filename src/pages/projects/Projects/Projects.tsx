import React from "react";
import { Link } from "@reach/router";
import { Button, Text } from "@hova-labs/bento-box-web";
import * as S from "./ProjectsStyles";
import { routes } from "../../../routes";

import HovaInstrumentsHero from "./Media/hova-instruments-hero.jpg";
import TSNHero from "./Media/tsn-hero.jpg";
import HovalinLightsHero from "./Media/hovalin-lights-hero.jpg";
import MCUHero from "./Media/mcu-hero.jpg";
import WaldoHero from "./Media/waldo-hero.jpg";

type Project = {
  title: string;
  description: string;
  imgSrc: string;
  linkTitle: string;
  linkUrl: string;
};
const projectArray: Array<Project> = [
  {
    title: "Hova Instruments",
    description: "Open source, 3D printable acoustic instruments for all!",
    imgSrc: HovaInstrumentsHero,
    linkTitle: "view",
    linkUrl: routes.HOVALIN,
  },
  {
    title: "Synesthesia Network",
    description: "A Social Network for synesthetes and researchers.",
    imgSrc: TSNHero,
    linkTitle: "view",
    linkUrl: routes.THE_SYNESTHESIA_NETWORK,
  },
  {
    title: "Synesthesia Light Show",
    description:
      "An interactive light show that demonstrates musical note --> color synesthesia.",
    imgSrc: HovalinLightsHero,
    linkTitle: "view",
    linkUrl: routes.SYNESTHESIA_LIGHT_SHOW,
  },
  {
    title: "HydraPrint MCU",
    description: "A good looking full stack hardware controller interface.",
    imgSrc: MCUHero,
    linkTitle: "view",
    linkUrl: routes.HYDRAPRINT,
  },
  {
    title: "Waldo",
    description:
      "An awesome, project manager friendly interface for managing your team.",
    imgSrc: WaldoHero,
    linkTitle: "view",
    linkUrl: routes.WALDO,
  },
];

export const Projects = (): React.ReactElement => (
  <S.Container>
    {projectArray.map(project => (
      <>
        <Link to={project.linkUrl} key={project.linkUrl}>
          <S.HeroImage backgroundImage={project.imgSrc} />
        </Link>
        <div>
          <S.TitleContainer>
            <Text typography="headingMedium">{project.title}</Text>
          </S.TitleContainer>
          <S.DescriptionContainer>
            <Text>{project.description}</Text>
          </S.DescriptionContainer>
          <S.ButtonContainer>
            <Link to={project.linkUrl} key={project.linkUrl}>
              <Button onPress={() => {}} title={project.linkTitle} />
            </Link>
          </S.ButtonContainer>
        </div>
      </>
    ))}
  </S.Container>
);
