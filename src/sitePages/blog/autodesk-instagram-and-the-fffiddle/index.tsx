import React from "react";

import fffiddle from "./Media/fffiddle.jpg";
import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const AutodeskInstagramAndTheFFFiddle: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      Creating an acoustic 3d printable violin has been a labor of love,
      instigated by a single instagram post. In March of 2014 Autodesk posted
      this photo of David Perry playing the FFFiddle.
    </div>
    <img src={fffiddle} alt="fffiddle" />
    <div>
      David Perry is a mechanical engineering genius, fellow cat aficionado, and
      the spark that showed it was possible to design and 3d print a functional
      violin.
    </div>
    <div>
      The FFFiddle is a solid and proven design. I'm proud to be one of the
      first to purchase the FFFiddle. The only problem is that my #1 client
      didn't quite like the way the thumb felt. A normal person would have just
      forked and redesigned the FFFiddle to have the appropriate attributes.
      Instead I dove into the 3d design rabbit hole: first with OpenSCAD, then
      with Fusion 360. After roughly a year and a half of casual prototyping,
      I've arrived at the point that I can now call the hovalin design "good
      enough".
    </div>
    <div>
      If phrases from our website sound familiar to those from OpenFabPDX, its
      because David's careful wordsmith work on his site along with his choice
      of licenses for the FFFiddle fit many of the same details and goals of the
      hovalin. A sincere thanks to Dave for all of your great work and
      inspiration.
    </div>
    <div>
      Please checkout his design, the FFFiddle and more awesome work at
      <a href="https://openfabpdx.com/">{" openfabpdx.com"}</a>
    </div>
  </BlogContainer>
);

export default AutodeskInstagramAndTheFFFiddle;
