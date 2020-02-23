import React from "react";

import doSpace from "./Media/do-space.jpg";
import hovalinCase from "./Media/hovalin-case.jpg";
import kaitlynPlaying from "./Media/kaitlyn-playing.jpg";
import shoveling from "./Media/shoveling.jpg";
import snow from "./Media/snow.jpg";
import soldOut from "./Media/sold-out.jpg";

export default (): React.ReactElement => (
  <div>
    <div>
      We had the amazing opportunity to present at a sold-out house at the
      {" " /* eslint-disable-line */}
      <a href="http://www.dospace.org/">Do Space</a>
      {" " /* eslint-disable-line */}
      on December 20th! It was our first talk where Matt and I presented
      together about the origin and future of our project. Sound check went
      well, but once everyone showed up they dampened the sound so much that it
      was a little hard to hear my tracks on stage... So logically, I decided on
      the spot to run around in the crowd while performing instead. It was rad :
      )
    </div>
    <div>
      After the talk, we got to hang out with family and catch up on our old
      Omaha hangs. Matt ate some Runza, I played with my brother's puppy, and we
      kicked it at Matt's parent's holiday party (with festive poker times).
    </div>
    <div>
      Thank you so much to everyone for coming out, and a big thanks to the Do
      Space for hosting us!
    </div>
    <div>Happy Holidays,</div>
    <div>Kaitlyn</div>
    <img src={doSpace} alt="Do Space" />
    <img src={soldOut} alt="Hovalin Sign sold out" />
    <img src={hovalinCase} alt="Hovalin on chairs" />
    <img src={kaitlynPlaying} alt="Kaitlyn playing the Hovalin" />
    <img src={snow} alt="snow" />
    <img src={shoveling} alt="Matt shoveling" />
  </div>
);
