import React from "react";
import threeDPrinter from "./media/threeDPrinter.svg";
import hovalinNeck from "./media/hovalin-neck.svg";
import hovalinBody from "./media/hovalin-body.svg";
import { Button } from "../../../components";

export const PrintParts = (): React.ReactElement => (
  <div>
    <div>
      <div>
        <div>2</div>
        <div>PRINT PARTS</div>
      </div>
      <img src={threeDPrinter} alt="3d printer" />
      <div>
        <div>New to 3D printing?</div>
        <div>
          In order to make the violin we’re going to need a 3D printer. It needs
          to be wide enough to print the neck (~300mm) and tall enough to print
          the violin body (~360mm).
        </div>
        <div>First layer problems</div>
        <div>
          A majority of the problems from 3d printing can stem from the first
          layer not adhering properly to the print bed. We recommend taking the
          following precautions when printing:
        </div>
        <ul>
          <li>Always make sure the bed is properly leveled.</li>
          <li>
            Put down fresh blue tape if any of the print area's tape shows signs
            of peeling.
          </li>
        </ul>
        <div>* extra credit *</div>
        <div>
          Sand the blue tape with 100 grit sandpaper to help prevent warping
        </div>
        <div>
          We're not trying to write the book on 3d printing. A great first step
          down the rabbit hole can be found
          <a href="https://reddit.com/r/3dprinting"> here.</a>
        </div>
        <div>
          All together, the violin will take ~500 grams of plastic to print.
          Assuming there aren't too many failed prints, you should be able to
          make the entire hovalin with a single 1kg roll of plastic.
        </div>
      </div>
    </div>
    <div>
      <div>
        <img src={hovalinNeck} alt="hovalin neck" />
        <div>The Neck</div>
        <div>10 PRINT HOURS | 90g PLASTIC</div>
        <div>PARAMETERS</div>
        <div>Layer Height: 0.2mm</div>
        <div>Infill: 30%</div>
        <div>Perimeters: 3</div>
        <Button href="/hovalin/docs" title="DOWNLOAD" onPress={() => {}} />
      </div>
      <div>
        <img src={hovalinBody} alt="hovalin body" />
        <div>The Body</div>
        <div>33 PRINT HOURS | 390g PLASTIC</div>
        <div>PARAMETERS</div>
        <div>Layer Height: 0.3mm</div>
        <div>Infill: 30%</div>
        <div>Perimeters: 2</div>
        <Button href="/hovalin/docs" title="DOWNLOAD" onPress={() => {}} />
      </div>
    </div>
  </div>
);
