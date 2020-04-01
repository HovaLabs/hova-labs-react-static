import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import {
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";
import * as S from "./LinkListStyles";

export const LinkList: React.FC<{}> = () => {
  const steps = [
    { anchorLink: "shopping-list", title: "Shopping List" },
    { anchorLink: "print-parts", title: "Clean up" },
    { anchorLink: "pegs", title: "Install Pegs" },
    { anchorLink: "assemble", title: "Assemble Body" },
    { anchorLink: "strings", title: "Install Strings" },
  ];

  const links = steps.map((step, index) => (
    <S.Link>
      <a key={step.anchorLink} href={`#${step.anchorLink}`}>
        <S.LinkSurface>
          <Text typography="headingMedium">{(index + 1).toString()}</Text>
          <Text typography="bodyText">{step.title}</Text>
        </S.LinkSurface>
      </a>
    </S.Link>
  ));
  return (
    <ContainerWithBorder>
      <ContainerContent flexL="100">
        <S.LinksContainer>{links}</S.LinksContainer>
      </ContainerContent>
    </ContainerWithBorder>
  );
};