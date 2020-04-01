import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { Button } from "../../components";
import tsnHero from "./tsn-hero.jpg";
import tsn from "./tsn.jpg";
import { routes } from "../../routes";
import tsn2 from "./tsn-2.jpg";
import Layout from "../../components/layout";
import * as S from "./TheSynesthesiaNetworkStyles";
import { ContainerWithBorder } from "../../components/Container";

export const TheSynesthesiaNetwork: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder
      backgroundImage={tsnHero}
      backgroundImageStyles={{ opacity: 0.2 }}
    >
      <Text typography="headingLarge">The Synesthesia Network</Text>
      <Text typography="headingSmall">
        A Nexus for Synesthetes and Researchers
      </Text>
      <S.ButtonPadding>
        <Button
          title="Check it out Live"
          href={routes.PROJECT_TSN}
          onPress={() => {}}
        />
      </S.ButtonPadding>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <Text typography="bodyText">
        The Synesthesia Network is an educational social network designed to
        explore the phenomenon of Synesthesia by connecting researchers,
        synesthetes, and inquiring minds.
      </Text>
      <Text typography="bodyText">
        Functions include checking out people with the condition, taking tests
        to see if you have any form of synesthesia, and brushing up on the
        newest news on synesthesia research.
      </Text>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <img src={tsn} width="100%" alt="The Synesthesia Netork snapshot" />
      <img src={tsn2} width="100%" alt="The Synesthesia Netork snapshot 2" />
    </ContainerWithBorder>
  </Layout>
);
