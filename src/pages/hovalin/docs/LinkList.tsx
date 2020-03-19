import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";
import * as S from "./LinkListStyles";

export const LinkList: React.FC<{}> = () => {
  const steps = [
    { anchorLink: "shopping-list", title: "Shopping List" },
    { anchorLink: "print-parts", title: "Clean up Prints" },
    { anchorLink: "pegs", title: "Install Pegs" },
    { anchorLink: "assemble", title: "Assemble Body" },
    { anchorLink: "strings", title: "Install Strings" },
  ];

  const links = steps.map((step, index) => (
    <S.Link>
      <S.LinkText key={step.anchorLink} href={`#${step.anchorLink}`}>
        <div>
          <Text typography="headingMedium">{(index + 1).toString()}</Text>
          <Text typography="bodyText">{step.title}</Text>
        </div>
      </S.LinkText>
    </S.Link>
  ));
  return (
    <ContainerWithBorder>
      <S.LinksContainer>{links}</S.LinksContainer>
    </ContainerWithBorder>
  );
};
