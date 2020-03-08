import React from "react";
import styled from "styled-components";
import { IconBaseProps } from "react-icons";
import { Icon, Cube, Robot, XML, Magic, Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";

// SERVICES START

const ServicesContainer = styled("div")`
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
`;

const ServicesTextContainer = styled("div")``;

const ServiceGridContainer = styled("div")`
  padding-top: ${p => p.theme.spacings.xl}px;
  display: grid;
  ${p =>
    p.theme.responsiveStyle("grid-template-columns", {
      s: "1fr",
      xl: "1fr 1fr",
    })}
  ${p =>
    p.theme.responsiveStyle("grid-gap", {
      s: `${p.theme.spacings.xl}px`,
      l: `${p.theme.spacings.xxl}px`,
    })}
`;

const ServiceGridItem = styled("div")`
  background: ${p => p.theme.colors.surface2};
  ${p =>
    p.theme.responsiveStyle("padding", {
      s: `${p.theme.spacings.l}px`,
      l: `${p.theme.spacings.l}px`,
    })}
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
    icon: Robot,
    title: "Firmware & Electronics",
    description:
      "From Arduino to Raspberry Pi, Teensy to AtMega, we've gotten our hands dirty in our fair share of firmware and electronics.",
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
    icon: Cube,
    title: "3D Printing",
    description:
      "Since 2012 we've been exploring the world of 3d printing and CAD. We love FDM, Fusion360, and OpenSCAD, to name a few.",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
  {
    icon: Magic,
    title: "UX & Design Systems",
    description:
      "The number one rule of software is DRY - Don't Repeat Yourself. We love making beautiful and reusable tools for designing websites",
    linkTitle: "Find out more",
    linkHref: "http://www.zombo.com",
  },
];
// SERVICES END

export const Services: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ServicesContainer>
      <ServicesTextContainer>
        <div>
          <Text typography="headingSmall">SERVICES</Text>
        </div>
        <div>
          <Text typography="headingLarge">What We Do</Text>
        </div>
      </ServicesTextContainer>
      <ServiceGridContainer>
        {services.map(s => (
          <ServiceGridItem key={s.title}>
            <div>
              <Icon IconComponent={s.icon} size={32} />
            </div>
            <div>
              <Text typography="headingMedium">{s.title}</Text>
            </div>
            <div>
              <Text>{s.description}</Text>
            </div>
          </ServiceGridItem>
        ))}
      </ServiceGridContainer>
    </ServicesContainer>
  </ContainerWithBorder>
);
