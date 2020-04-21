import React from "react";
import ReactGA from "react-ga";
import { Text } from "../../../components";
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
          <div>
            <Text typography="headingMedium">{(index + 1).toString()}</Text>
          </div>
          <div>
            <Text typography="bodyText">{step.title}</Text>
          </div>
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
