import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { Button } from "../../components";
import tsnHero from "./tsn-hero.jpg";
import tsn from "./tsn.jpg";
import tsn2 from "./tsn-2.jpg";
import Layout from "../../components/layout";

export const TheSynesthesiaNetwork: React.FC<{}> = () => (
  <Layout>
    <div>
      <div>
        <img src={tsnHero} alt="The Synesthesia Network" />
      </div>
      <div>
        <Text typography="headingLarge">A Nexus</Text>
      </div>
      <div>
        <Text>
          The Synesthesia Network is an educational social network designed to
          explore the phenomenon of Synesthesia by connecting researchers,
          synesthetes, and inquiring minds.
        </Text>
      </div>
      <div>
        <Text>
          Functions include checking out people with the condition, taking tests
          to see if you have any form of synesthesia, and brushing up on the
          newest news on synesthesia research.
        </Text>
      </div>
      <div>
        <Button
          title="Check it out live"
          href="http://www.thesynesthesianetwork.com/"
          onPress={() => {}}
        />
      </div>
      <div>
        <img
          src={tsn}
          style={{ height: "70vh" }}
          alt="The Synesthesia Netork snapshot"
        />
      </div>
      <div>
        <img
          src={tsn2}
          style={{ height: "70vh" }}
          alt="The Synesthesia Netork snapshot 2"
        />
      </div>
    </div>
  </Layout>
);
