import React from "react";
import { Text, Button } from "../../components";
import { routes } from "../../routes";
import { ContainerWithBorder } from "../../components/Container";
import VoteByAddressPic from "./vote-by-address.png";
import VoteByAddressExample from "./vote-by-address-example.png";
import Layout from "../../components/layout";

export const VoteByAddress: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder
      backgroundImage={VoteByAddressExample}
      backgroundImageStyles={{ opacity: 0.2 }}
    >
      <Text typography="headingLarge">Vote By Address</Text>

      <Text typography="headingSmall">A Voting information resource.</Text>
      <br />
      <br />
      <Button
        title="Check it out Live"
        href={routes.PROJECT_VOTE_BY_ADDRESS}
        onPress={() => { }}
      />
    </ContainerWithBorder>

    <ContainerWithBorder>
      <Text typography="bodyText">
        Like most people, we wanted to find any way that we could help during
        the 2020 presidential election. One way we identified was to make the a
        one stop shop, simple way to get your local voting info.
      </Text>
      <br />
      <br />
      <Text typography="bodyText">
        Vote by address uses Google Civic Api's data to display a custom
        dashboard for a user based on their street address. No sign up required!
      </Text>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <img
        alt="vote by address home page"
        src={VoteByAddressPic}
        width="100%"
      />
    </ContainerWithBorder>
    <ContainerWithBorder>
      <img
        alt="vote by address home page"
        src={VoteByAddressExample}
        width="100%"
      />
    </ContainerWithBorder>
  </Layout>
);
