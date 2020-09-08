import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { Button } from "../../../components/Button/Button";
import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { Code, Highlight, Quote } from "../Blog/blogStyles";
import { BlogContainer } from "../../../components/Blog/BlogContainer";
import imgMeme from "./Media/meme.png";
import imgFigma from "./Media/figma.png";
import imgStorybook from "./Media/storybook.png";
import imgWhyCare from "./Media/whatDoYouWant.gif";
import { routes } from "../../../routes";
import assembly from "./Media/assembly.gif";
import assemblyMultiPartChamber from "./Media/assembly-multi-part-chamber.gif";

const DeductiveComponentLanguage: React.FC<{}> = () => {
  return (
    <BlogContainer blogManifest={{ ...blogManifest, hero }}>
      <div>Today we're excited to launch Hovalin V5!</div>
      <div>
        Over the past few months, we've been tying together some of the lessons
        learned from v4 along with the feedback from the community. Here's a
        list of thinks to look for with v5:
      </div>
      <ul>
        <li>
          The bridge is printed separately (allows tuning the string action)
          ((We found it sounds a lot better))
        </li>
        <li>No supports in the F-holes</li>
        <li>Easier to mount strings</li>
        <li>Option to print files without our built-in supports</li>
        <li>
          Option to print body as a single piece or in 3 pieces (note: the split
          chamber and neck can be printed on a prusa i3 as well as ender3
          printer)
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <div>
              <br />
              <div>Single-Piece Chamber assembly</div>
              <img src={assembly} alt="assembly" />
            </div>
            <div>
              <br />
              <div>Multi-piece Chamber assembly</div>
              <img src={assemblyMultiPartChamber} alt="multi-piece assembly" />
            </div>
          </div>
        </li>
      </ul>
      <div>
        Check out the <a href={routes.HOVALIN_DOCS}>new files</a>. As always, we
        love feedback. Please keep in touch via the{" "}
        <a href={routes.HOVALIN_REDDIT}>hovalin_community</a> subreddit.
      </div>
    </BlogContainer>
  );
};

export default DeductiveComponentLanguage;
