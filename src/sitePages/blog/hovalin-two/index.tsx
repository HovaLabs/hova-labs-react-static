import React from "react";
import { routes } from "../../../routes";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const HovalinTwo: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      tl;dr You have access to the CAD. It's easier to print and assemble.
    </div>

    <div>Hovalin 2.0, What and Why:</div>
    <div>
      Today we're excited to launch Hovalin V2.0! As is the case for any labor
      of love, the Hovalin project will never truly be "done". That being said,
      we're now ready to mark the next step in the design's evolution.
    </div>
    <div>
      Over the past few months, I've had a blast redesigning the violin from
      scratch in Fusion 360. We've learned a lot of new tricks and gotten some
      pro advice from co-workers and friends. Here are some of the notable
      improvements that we've added in the latest release:
    </div>
    <ul>
      <li>Easier to insert truss rods</li>
      <li>
        The violin body now has a constant thickness (Woot Woot lofts with guide
        rails)
      </li>
      <li>Notch for adding a fishman pickup to the bridge</li>
      <li>Optimized spacing for tuning pegs</li>
      <li>Easy to modify neck length</li>
      <li>The Fusion 360 CAD files are now available</li>
    </ul>
    <div>
      As for the future of the Hovalin, there are still a ton of ways that the
      design can be improved. Most notably, we're beginning work on 1/2 and 1/4
      sized models in order to make it possible to introduce the Hovalin into
      school music programs.
    </div>
    <div>...But that's for another blog post</div>
    <div>
      Check out the new files. As always, we love feedback. Feel free to send us
      messages via the
      <a href={routes.CONTACT}>contact form.</a>
      If you want to see a feature added to the Hovalin, please post an issue on
      <a href="https://github.com/matthova/hovalin-files/commits/master">
        {" The Hovalin's GitHub page."}
      </a>
    </div>
    <div>Cheers, and Happy 2016!</div>
    <iframe
      title="Hovalin v2.0 video"
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/9fZ_vYkuuZU"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </BlogContainer>
);

export default HovalinTwo;
