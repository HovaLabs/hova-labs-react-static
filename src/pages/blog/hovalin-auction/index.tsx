import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/BlogContainer";

export default (): React.ReactElement => (
  <BlogContainer blogManifest={blogManifest}>
    <div>
      <Text>
        Hey Everyone! We donated a Hovalin to the Steve Elsasser Fundraiser at
        the
      </Text>

      <a href="http://www.germanamericansociety.org/">
        <Text> German American Society </Text>
      </a>
      <Text>in Omaha, NE!</Text>
    </div>
    <div>
      <Text>
        Steve Elsasser has been diagnosed with a rare degenerative, terminal
        brain disease known as "Creutzfeldt-Jacob Disease (CID)". This disease
        affects one in every million people each year, and is very aggressive .
      </Text>
    </div>
    <div>
      <Text>
        Steve has been an active member of the German-American Society since
        1990, a place where our family is active as well (Matt's family is über
        German). As a matter of fact, we even recorded our
      </Text>
      <a href="https://www.youtube.com/watch?v=EcmNlgeXwxs">
        <Text> Carol of the Bass </Text>
      </a>
      <Text>
        music video in their great hall (So much fog machine). Steve has been
        active in the Turner club and has volunteered for Octoberfest and
        grounds/club maintenance through the years.
      </Text>
    </div>
    <div>
      <Text>
        So our family thought : why not donate a Hovalin to a silent auction to
        help out this rad guy? Here are the details:
      </Text>
    </div>
    <div>
      <Text>Where:</Text>
    </div>
    <div>
      <Text>
        The German-American Society 3717 South 120th st Omaha, Nebraska 68144
      </Text>
    </div>
    <div>
      <Text>When:</Text>
    </div>
    <div>
      <Text>January 8th, 2015</Text>
    </div>
    <div>
      <Text>Ticket price:</Text>
    </div>
    <div>
      <Text>Adults: $10.00</Text>
    </div>
    <div>
      <Text>Kids: $5.00</Text>
    </div>
    <div>
      <Text>The schedule:</Text>
    </div>
    <div>
      <Text>Doors open at 5pm,</Text>
    </div>
    <div>
      <Text>Food Served: 5pm-8pm</Text>
    </div>
    <div>
      <Text>All you can eat Spaghetti, Bread sticks, and salad ya'll</Text>
    </div>
    <div>
      <Text>
        Please let us know if you know any other good causes that we could
        donate a Hovalin to!
      </Text>
    </div>
  </BlogContainer>
);
