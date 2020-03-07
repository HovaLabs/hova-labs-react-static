import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/BlogContainer";

const HovalinThreeOhPlan: React.FC<{}> = () => (
  <BlogContainer blogManifest={blogManifest}>
    <div>
      <Text>
        This post is half update and half an apology for the United States not
        using the metric system. Enjoy!
      </Text>
    </div>
    <br />
    <div>
      <Text>
        Thus far in our work with Hovalin, we've spent a lot of time developing
        a design before talking about or releasing it. This post is a departure
        from our norm. We want to give you a sneak peak into some problems that
        we're hoping to create solutions for.
      </Text>
    </div>
    <div>
      <Text>Here's the feature-list:</Text>
    </div>
    <ul>
      <li>
        <Text>
          Move away from the current carbon fiber rectangle to an 8mm (5/16")
          rod. Because the rest of the world outside of the US uses the metric
          system, our current carbon fiber rods are difficult to source if you
          are not in the US. Who knew? We have heard you, and we are gettin' to
          it!
        </Text>
      </li>
      <li>
        <Text>
          Create a "lock" that will lock together the top and bottom pieces with
          the middle piece.
        </Text>
      </li>
      <li>
        <Text>Create custom brims that will reduce warping.</Text>
      </li>
      <li>
        <Text>
          Seriously consider actually CAD'ing a chin-rest and shoulder-rest.
        </Text>
      </li>
      <li>
        <Text>
          Work out a new system for distributing multiple options for the .stls
          including files with brim, files without brim, pre-sliced files with
          supports for the middle piece.
        </Text>
      </li>
    </ul>

    <div>
      <Text>
        It's quite the list, but we're excited to slowly chip away and make the
        Hovalin just a bit more easy to manufacture.
      </Text>
    </div>
    <div>
      <Text>
        In case you want to get your hands dirty, here's a link to the cad's
        work in progress: http://a360.co/1pbwxDH
      </Text>
    </div>
    <div>
      <Text>
        I have a feeling that the rod will create some unwanted interference
        with the tuning pegs. If we can work through a solution for this, not
        only will the total bill of materials for a Hovalin lower in cost, it
        should also make the parts more accessible for the majority of the world
        that actually respects the metric system.
      </Text>
    </div>
    <div>
      <Text>Anyway, Happy Monday.</Text>
    </div>
    <div>
      <Text>-Matt</Text>
    </div>
  </BlogContainer>
);

export default HovalinThreeOhPlan;
