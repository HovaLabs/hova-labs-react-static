import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import Layout from "../../components/layout";

export const SynesthesiaLightShow: React.FC<{}> = () => (
  <Layout>
    {" "}
    <div>
      <div>
        <Text typography="headingLarge">Pitch -> Color.</Text>
      </div>
      <div>
        <Text>
          We give a lot of talks about Synesthesia, and it can be hard to
          describe for those that don't have any form of it. In order to
          demonstrate Kaitlyn's "Pitch -> Color" Synesthesia, we made a violin
          powered synesthesia Light Show that demonstrates the colors she sees
          in real time.
        </Text>
      </div>
      <div>
        <div>
          <Text>
            Here is a video of us performing at The World Science Festival:
          </Text>
        </div>
        <iframe
          title="Synesthesia Light Show"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/au5-IuI4SRY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div>
        <div>
          <Text>
            If you want to see what this kind of synesthetic experience looks
            like in 3D, check out this great video we got to work on with The
            Discovery Channel!
          </Text>
        </div>
        <iframe
          title="Discovery synesthesia video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/obrBAysVef0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div>
        <div>
          <Text>Here is an early concept we made for the light show:</Text>
        </div>
        <iframe
          title="Epic Violinist Kaitlyn Hova: Auditory Synesthesia"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dI4DpHnbX_Q"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </Layout>
);
