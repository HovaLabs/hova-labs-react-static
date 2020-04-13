import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import ReactGA from "react-ga";
import { ContainerWithBorder } from "../../../components/Container";
import * as S from "./LinkListStyles";

export const LinkList: React.FC<{}> = () => {
  const steps = [
    { anchorLink: "shopping-list", title: "Shopping List" },
    { anchorLink: "print-parts", title: "Print Parts" },
    { anchorLink: "pegs", title: "Install Pegs" },
    { anchorLink: "assemble", title: "Assemble Body" },
    { anchorLink: "strings", title: "Install Strings" },
  ];

  const links = steps.map((step, index) => (
    <S.Link>
      <a
        key={step.anchorLink}
        href={`#${step.anchorLink}`}
        onClick={() => {
          ReactGA.event({
            category: "Hovalin_Docs",
            action: `Anchor_Link_${step.title.replace(/ /g, "_")}`,
          });
        }}
      >
        <S.LinkSurface>
          <Text typography="headingMedium">{(index + 1).toString()}</Text>
          <Text typography="bodyText">{step.title}</Text>
        </S.LinkSurface>
      </a>
    </S.Link>
  ));
  return (
    <ContainerWithBorder>
      <S.LinksContainer>{links}</S.LinksContainer>
    </ContainerWithBorder>
  );
};
