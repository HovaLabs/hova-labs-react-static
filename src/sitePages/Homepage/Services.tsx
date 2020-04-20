import React from "react";
import styled from "styled-components";
import { IconBaseProps } from "react-icons";
import { Icon, Cube, Robot, XML, Magic } from "@hova-labs/bento-box-web";
import { Text } from "../../components";
import { TitlePrimary } from "../../components/Title/TitlePrimary/TitlePrimary";

import {
  ContainerContent,
  ContainerWithBorder,
  ContainerFlex,
} from "../../components/Container";

// SERVICES START

const ServicesTextContainer = styled("div")``;

const ServiceGridContainer = styled("div")`
  display: -ms-grid;
  display: grid;
  ${(p) =>
    p.theme.responsiveStyle("-ms-grid-columns", {
      s: "1fr",
      xl: "1fr 1fr",
    })}
  ${(p) =>
    p.theme.responsiveStyle("grid-template-columns", {
      s: "1fr",
      xl: "1fr 1fr",
    })}
    > div {
    ${(p) =>
      p.theme.responsiveStyle("margin", {
        s: `${p.theme.spacings.l}px`,
        l: `${p.theme.spacings.xl}px`,
      })}
    :nth-child(1) {
      ${(p) =>
        p.theme.responsiveStyle("-ms-grid-column", {
          s: "1",
          xl: "1",
        })}
      ${(p) =>
        p.theme.responsiveStyle("-ms-grid-row", {
          s: "1",
          xl: "1",
        })}
    }
    :nth-child(2) {
      ${(p) =>
        p.theme.responsiveStyle("-ms-grid-column", {
          s: "1",
          xl: "2",
        })}
      ${(p) =>
        p.theme.responsiveStyle("-ms-grid-row", {
          s: "2",
          xl: "1",
        })}
    }
    :nth-child(3) {
      ${(p) =>
        p.theme.responsiveStyle("-ms-grid-column", {
          s: "1",
          xl: "1",
        })}
      ${(p) =>
        p.theme.responsiveStyle("-ms-grid-row", {
          s: "3",
          xl: "2",
        })}
    }
    :nth-child(4) {
      ${(p) =>
        p.theme.responsiveStyle("-ms-grid-column", {
          s: "1",
          xl: "2",
        })}
      ${(p) =>
        p.theme.responsiveStyle("-ms-grid-row", {
          s: "4",
          xl: "2",
        })}
    }
  }
`;

type Service = {
  icon: (props: IconBaseProps) => JSX.Element;
  title: string;
  description: string;
  linkTitle: string;
  linkHref: string;
};
const services: Array<Service> = [
  {
    icon: Magic,
    title: "UX & Design Systems",
    description:
      "The number one rule of software is DRY - Don't Repeat Yourself. We love making beautiful and reusable tools for designing websites",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
  {
    icon: XML,
    title: "Web Development",
    description:
      "We've always had a passion for turning a message into reality.",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
  {
    icon: Robot,
    title: "Firmware & Electronics",
    description:
      "From Arduino to Raspberry Pi, Teensy to AtMega, we've gotten our hands dirty in our fair share of firmware and electronics.",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
  {
    icon: Cube,
    title: "3D Printing",
    description:
      "Since 2012 we've been exploring the world of 3d printing and CAD. We love FDM, Fusion360, and OpenSCAD, to name a few.",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
];
// SERVICES END

export const Services: React.FC<{}> = () => (
  <ContainerWithBorder lineVariant="forward">
    <ContainerFlex>
      <ContainerContent flexXL="100">
        <TitlePrimary subtitle="Services" title="What We Do" />
      </ContainerContent>
      <ServiceGridContainer>
        {services.map((s) => (
          <ContainerContent flexXL="50" key={s.title}>
            <div>
              <Icon IconComponent={s.icon} size={32} />
            </div>
            <div>
              <Text typography="headingSmall">{s.title}</Text>
            </div>
            <div>
              <Text>{s.description}</Text>
            </div>
          </ContainerContent>
        ))}
      </ServiceGridContainer>
    </ContainerFlex>
  </ContainerWithBorder>
);
