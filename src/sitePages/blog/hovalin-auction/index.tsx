import React from "react";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const HovalinAuction: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      Hey Everyone! We donated a Hovalin to the Steve Elsasser Fundraiser at the
      <a href="http://www.germanamericansociety.org/">
        German American Society
      </a>
      in Omaha, NE!
    </div>
    <div>
      Steve Elsasser has been diagnosed with a rare degenerative, terminal brain
      disease known as "Creutzfeldt-Jacob Disease (CID)". This disease affects
      one in every million people each year, and is very aggressive .
    </div>
    <div>
      Steve has been an active member of the German-American Society since 1990,
      a place where our family is active as well (Matt's family is über German).
      As a matter of fact, we even recorded our
      <a href="https://www.youtube.com/watch?v=EcmNlgeXwxs">
        Carol of the Bass
      </a>
      music video in their great hall (So much fog machine). Steve has been
      active in the Turner club and has volunteered for Octoberfest and
      grounds/club maintenance through the years.
    </div>
    <div>
      So our family thought : why not donate a Hovalin to a silent auction to
      help out this rad guy? Here are the details:
    </div>
    <div>Where:</div>
    <div>
      The German-American Society 3717 South 120th st Omaha, Nebraska 68144
    </div>
    <div>When:</div>
    <div>January 8th, 2015</div>
    <div>Ticket price:</div>
    <div>Adults: $10.00</div>
    <div>Kids: $5.00</div>
    <div>The schedule:</div>
    <div>Doors open at 5pm,</div>
    <div>Food Served: 5pm-8pm</div>
    <div>All you can eat Spaghetti, Bread sticks, and salad ya'll</div>
    <div>
      Please let us know if you know any other good causes that we could donate
      a Hovalin to!
    </div>
  </BlogContainer>
);

export default HovalinAuction;
