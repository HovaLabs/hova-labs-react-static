import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { routes } from "../../../routes";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const HovalinTwo: React.FC<{}> = () => (
  <BlogContainer blogManifest={blogManifest}>
    <div>
      <Text>
        tl;dr You have access to the CAD. It's easier to print and assemble.
      </Text>
    </div>

    <div>
      <Text>Hovalin 2.0, What and Why:</Text>
    </div>
    <div>
      <Text>
        Today we're excited to launch Hovalin V2.0! As is the case for any labor
        of love, the Hovalin project will never truly be "done". That being
        said, we're now ready to mark the next step in the design's evolution.
      </Text>
    </div>
    <div>
      <Text>
        Over the past few months, I've had a blast redesigning the violin from
        scratch in Fusion 360. We've learned a lot of new tricks and gotten some
        pro advice from co-workers and friends. Here are some of the notable
        improvements that we've added in the latest release:
      </Text>
    </div>
    <ul>
      <li>
        <Text>Easier to insert truss rods</Text>
      </li>
      <li>
        <Text>
          The violin body now has a constant thickness (Woot Woot lofts with
          guide rails)
        </Text>
      </li>
      <li>
        <Text>Notch for adding a fishman pickup to the bridge</Text>
      </li>
      <li>
        <Text>Optimized spacing for tuning pegs</Text>
      </li>
      <li>
        <Text>Easy to modify neck length</Text>
      </li>
      <li>
        <Text>The Fusion 360 CAD files are now available</Text>
      </li>
    </ul>
    <div>
      <Text>
        As for the future of the Hovalin, there are still a ton of ways that the
        design can be improved. Most notably, we're beginning work on 1/2 and
        1/4 sized models in order to make it possible to introduce the Hovalin
        into school music programs.
      </Text>
    </div>
    <div>
      <Text>...But that's for another blog post</Text>
    </div>
    <div>
      <Text>
        Check out the new files. As always, we love feedback. Feel free to send
        us messages via the
      </Text>
      <a href={routes.CONTACT}>
        <Text> contact form.</Text>
      </a>
      <Text>
        If you want to see a feature added to the Hovalin, please post an issue
        on
      </Text>
      <a href="https://github.com/matthova/hovalin-files/commits/master">
        <Text> The Hovalin's GitHub page.</Text>
      </a>
    </div>
    <div>
      <Text>Cheers, and Happy 2016!</Text>
    </div>
    <iframe
      title="Hovalin v2.0 video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/9fZ_vYkuuZU"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </BlogContainer>
);

export default HovalinTwo;
