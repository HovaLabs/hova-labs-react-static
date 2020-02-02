import React from "react";
import { Link } from "@reach/router";
import { Button, Text } from "@hova-labs/bento-box-web";
import * as S from "./ProjectsStyles";

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
    imgSrc: "/media/projects/hova-instruments-hero.jpg",
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
    imgSrc: "/media/projects/tsn-hero.jpg",
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
    imgSrc: "/media/projects/hovalin-lights-hero.jpg",
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
    imgSrc: "/media/projects/mcu-hero.jpg",
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
    imgSrc: "/media/projects/waldo-hero.jpg",
    links: [
      {
        title: "Hovalin",
        link: "/projects/waldo",
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
