import React from "react";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const HovalinThreeOhPlan: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      This post is half update and half an apology for the United States not
      using the metric system. Enjoy!
    </div>
    <div>
      Thus far in our work with Hovalin, we've spent a lot of time developing a
      design before talking about or releasing it. This post is a departure from
      our norm. We want to give you a sneak peak into some problems that we're
      hoping to create solutions for.
    </div>
    <div>Here's the feature-list:</div>
    <ul>
      <li>
        Move away from the current carbon fiber rectangle to an 8mm (5/16") rod.
        Because the rest of the world outside of the US uses the metric system,
        our current carbon fiber rods are difficult to source if you are not in
        the US. Who knew? We have heard you, and we are gettin' to it!
      </li>
      <li>
        Create a "lock" that will lock together the top and bottom pieces with
        the middle piece.
      </li>
      <li>Create custom brims that will reduce warping.</li>
      <li>
        Seriously consider actually CAD'ing a chin-rest and shoulder-rest.
      </li>
      <li>
        Work out a new system for distributing multiple options for the .stls
        including files with brim, files without brim, pre-sliced files with
        supports for the middle piece.
      </li>
    </ul>

    <div>
      It's quite the list, but we're excited to slowly chip away and make the
      Hovalin just a bit more easy to manufacture.
    </div>
    <div>
      In case you want to get your hands dirty, here's a link to the cad's work
      in progress: http://a360.co/1pbwxDH
    </div>
    <div>
      I have a feeling that the rod will create some unwanted interference with
      the tuning pegs. If we can work through a solution for this, not only will
      the total bill of materials for a Hovalin lower in cost, it should also
      make the parts more accessible for the majority of the world that actually
      respects the metric system.
    </div>
    <div>Anyway, Happy Monday.</div>
    <div>-Matt</div>
  </BlogContainer>
);

export default HovalinThreeOhPlan;
