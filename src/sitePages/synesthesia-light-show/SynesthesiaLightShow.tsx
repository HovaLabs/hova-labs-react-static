import React from "react";
import { Text } from "../../components";
import { ContainerWithBorder } from "../../components/Container";

import Layout from "../../components/layout";

export const SynesthesiaLightShow: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder>
      <Text typography="headingLarge">Synesthesia Light Show</Text>
      <Text typography="headingSmall">Pitch -> Color.</Text>
    </ContainerWithBorder>

    <ContainerWithBorder>
      <Text typography="bodyText">
        We give a lot of talks about Synesthesia, and it can be hard to describe
        for those that don't have any form of it. In order to demonstrate
        Kaitlyn's "Pitch -> Color" Synesthesia, we made a violin powered
        synesthesia Light Show that demonstrates the colors she sees in real
        time.
      </Text>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <Text typography="bodyText">
        Us performing at The World Science Festival:
      </Text>
      <iframe
        title="Synesthesia Light Show"
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/au5-IuI4SRY"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ContainerWithBorder>

    <ContainerWithBorder>
      <Text typography="bodyText">
        An early concept we made for the light show:
      </Text>
      <iframe
        title="Epic Violinist Kaitlyn Hova: Auditory Synesthesia"
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/dI4DpHnbX_Q"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ContainerWithBorder>

    <ContainerWithBorder>
      <Text typography="bodyText">
        If you want to see what this kind of synesthetic experience looks like
        in 3D, check out this great video we got to work on with The Discovery
        Channel!
      </Text>
      <iframe
        title="Discovery synesthesia video"
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/obrBAysVef0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ContainerWithBorder>
  </Layout>
);
