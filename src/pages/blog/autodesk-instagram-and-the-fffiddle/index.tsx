import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import fffiddle from "./Media/fffiddle.jpg";

export default (): React.ReactElement => (
  <div>
    <div>
      <Text>
        Creating an acoustic 3d printable violin has been a labor of love,
        instigated by a single instagram post. In March of 2014 Autodesk posted
        this photo of David Perry playing the FFFiddle.
      </Text>
    </div>
    <img src={fffiddle} alt="fffiddle" />
    <div>
      <Text>
        David Perry is a mechanical engineering genius, fellow cat aficionado,
        and the spark that showed it was possible to design and 3d print a
        functional violin.
      </Text>
    </div>
    <div>
      <Text>
        The FFFiddle is a solid and proven design. I'm proud to be one of the
        first to purchase the FFFiddle. The only problem is that my #1 client
        didn't quite like the way the thumb felt. A normal person would have
        just forked and redesigned the FFFiddle to have the appropriate
        attributes. Instead I dove into the 3d design rabbit hole: first with
        OpenSCAD, then with Fusion 360. After roughly a year and a half of
        casual prototyping, I've arrived at the point that I can now call the
        hovalin design "good enough".
      </Text>
    </div>
    <div>
      <Text>
        If phrases from our website sound familiar to those from OpenFabPDX, its
        because David's careful wordsmith work on his site along with his choice
        of licenses for the FFFiddle fit many of the same details and goals of
        the hovalin. A sincere thanks to Dave for all of your great work and
        inspiration.
      </Text>
    </div>
    <div>
      <Text>
        Please checkout his design, the FFFiddle and more awesome work at
        openfabpdx.com
      </Text>
    </div>
  </div>
);
