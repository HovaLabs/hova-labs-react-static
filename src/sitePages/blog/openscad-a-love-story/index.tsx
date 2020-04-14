import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import hovalinStick from "./Media/hovalin-stick.png";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const OpenscadALoveStory: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      <Text>
        There is one line of code to create a cube that is 10mm by 20mm by 30mm.
        The Open Source scripting CAD program OpenSCAD allowed me to make 3d
        objects using only code, and I fell in love with it.
      </Text>
    </div>
    <code>
      <Text>cube([10, 20, 30]);</Text>
    </code>
    <div>
      <Text>
        OpenSCAD is great for parametric modeling. If you want to make ten
        objects, each with a hole that is 0.2mm larger than the last, OpenSCAD
        is the way to go. Unfortunately, I discovered throughout my design
        process that it can easily turn into spaghetti code when creating
        complex 3d models.
      </Text>
    </div>
    <br />
    <div>
      <Text>
        The hovalin design began as 100 lines of OpenSCAD code. Despite all of
        its shortcomings, hovalin v0.1 created the basic concepts for a 3d
        printable violin that can extend to any CAD program. Check out my
        original hovalin code at
        {/* @ts-ignore */}
        <a href="https://github.com/matthova/hovalin/blob/master/hovalin.scad">
          {" github"}
        </a>
        .
      </Text>
    </div>
    <img src={hovalinStick} alt="hovalin stick rendering" />
  </BlogContainer>
);

export default OpenscadALoveStory;
