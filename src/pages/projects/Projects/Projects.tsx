import React from "react";
import { Link } from "@reach/router";
import { Button, Text } from "@hova-labs/bento-box-web";
import * as S from "./ProjectsStyles";

import HovaInstrumentsHero from "./Media/hova-instruments-hero.jpg";
import TSNHero from "./Media/tsn-hero.jpg";
import HovalinLightsHero from "./Media/hovalin-lights-hero.jpg";
import MCUHero from "./Media/mcu-hero.jpg";
import WaldoHero from "./Media/waldo-hero.jpg";

type Project = {
  title: string;
  description: string;
  imgSrc: string;
  links: Array<{ title: string; link: string }>;
};
const projectArray: Array<Project> = [
  {
    title: "Hova Instruments",
    description: "Open source, 3D printable acoustic instruments for all!",
    imgSrc: HovaInstrumentsHero,
    links: [
      {
        title: "Hovalin",
        link: "/projects/hovalin",
      },
      {
        title: "Hovalele",
        link: "/projects/hovalele",
      },
    ],
  },
  {
    title: "Synesthesia Network",
    description: "A Social Network for synesthetes and researchers.",
    imgSrc: TSNHero,
    links: [
      {
        title: "view",
        link: "/projects/the-synesthesia-network",
      },
    ],
  },
  {
    title: "Synesthesia Light Show",
    description:
      "An interactive light show that demonstrates musical note --> color synesthesia.",
    imgSrc: HovalinLightsHero,
    links: [
      {
        title: "view",
        link: "/projects/synesthesia-light-show",
      },
    ],
  },
  {
    title: "HydraPrint MCU",
    description: "A good looking full stack hardware controller interface.",
    imgSrc: MCUHero,
    links: [
      {
        title: "view",
        link: "/projects/hydraprint",
      },
    ],
  },
  {
    title: "Waldo",
    description:
      "An awesome, project manager friendly interface for managing your team.",
    imgSrc: WaldoHero,
    links: [
      {
        title: "view",
        link: "/waldo",
      },
    ],
  },
];

export const Projects = (): React.ReactElement => (
  <S.Container>
    {projectArray.map(project => (
      <>
        <S.HeroImage backgroundImage={project.imgSrc} />
        <div>
          <S.TitleContainer>
            <Text typography="headingMedium">{project.title}</Text>
          </S.TitleContainer>
          <S.DescriptionContainer>
            <Text>{project.description}</Text>
          </S.DescriptionContainer>
          <S.ButtonContainer>
            {project.links.map(link => (
              <Link to={link.link} key={link.link}>
                <Button onPress={() => {}} title={link.title} />
              </Link>
            ))}
          </S.ButtonContainer>
        </div>
      </>
    ))}
  </S.Container>
);
