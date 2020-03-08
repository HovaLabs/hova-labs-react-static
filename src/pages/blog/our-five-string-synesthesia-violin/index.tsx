import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import violinPhoto1 from "./violin-photo-1.jpg";
import violinPhoto2 from "./violin-photo-2.jpg";
import violinPhoto3 from "./violin-photo-3.jpg";
import violinPhoto4 from "./violin-photo-4.jpg";
import violinPhoto5 from "./violin-photo-5.jpg";
import violinPhoto6 from "./violin-photo-6.jpg";
import violinPhoto7 from "./violin-photo-7.jpg";
import violinPhoto8 from "./violin-photo-8.jpg";
import violinPhoto9 from "./violin-photo-9.jpg";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const OurFiveStringSynesthesiaViolin: React.FC<{}> = () => (
  <BlogContainer blogManifest={blogManifest}>
    <div>
      <Text>
        Since the beginning of our pursuit of 3D printing violins, we've had a
        very specific list of checkboxes in mind for our "no holds barred",
        perfect violin.
      </Text>
    </div>
    <ul>
      <li>
        <Text>3D printable on a "Desktop" printer</Text>
      </li>
      <li>
        <Text>5 String</Text>
      </li>
      <li>
        <Text>Barbera pickup</Text>
      </li>
      <li>
        <Text>Translucent with LEDs in it</Text>
      </li>
      <li>
        <Text>Responsive to sound and pitch</Text>
      </li>
    </ul>
    <div>
      <Text>
        Just checking off the first box was quite an endeavor. We're nowhere
        near done tweaking our design, but we wereso happy to have our first
        working prototype of what I call, the"Synesthesia Projector" Hovalin.
      </Text>
    </div>
    <div>
      <Text>Here's a clip of the violin in action:</Text>
    </div>
    <iframe
      title="hovalin-in-action"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/kvYgzX4rx8U"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <div>
      <Text>Here's a quick walkthrough of the build:</Text>
    </div>
    <div>
      <Text>
        We added a slot for a 5-string Barbera pickup, as well as an on/off
        switch for the electronics.
      </Text>
    </div>
    <img src={violinPhoto1} alt="hovalin-pickup" />
    <div>
      <Text>
        Below that pickup, (You can sort of see it through the F hole) we have a
        cheapo piezopickup that will be used to drive the pitch and level
        detection.
      </Text>
    </div>
    <img src={violinPhoto2} alt="hovalin-pickup-alternate-angle" />
    <div>
      <Text>
        In order tocharge the LED system, we added a usb-micro extension cable.
        To mount it inplace, we covered a chopstick in hot glue and proceeded to
        apply it liberally to the general area.
      </Text>
    </div>
    <img src={violinPhoto3} alt="hovalin-hot-glue" />
    <img src={violinPhoto4} alt="hovalin-charging-port" />
    <div>
      <Text>
        All signal processing is done by the Teensy3.6 and the Teensy Audio
        board. The goal of the Teensy is to convert theinput microphone's pitch
        into a specific color, and have the volume drivethe brightness.
      </Text>
    </div>
    <div>
      <Text>Some interesting bugs I ran into:</Text>
    </div>
    <ul>
      <li>
        <Text>
          If I started to drive morethan ~40 neopixels, I would start to
          experience ring modulation in my audioprocessing sketch.
        </Text>
      </li>
      <li>
        <Text>
          The noise generated from driving neopixels could bepicked up by the
          audio circuit. If it picked up enough noise from drivingthe LEDs, it
          would eventually reach a never-ending noise/light/feedback loopwhere
          the noise generated from the LEDs would create audio which would
          makethe LEDs brighter, and so on.
        </Text>
      </li>
      <li>
        <Text>
          The Teensy 3.2 (or perhaps my poor soldering)was more susceptible to
          noise.
        </Text>
      </li>
    </ul>
    <div>
      <Text>
        I'd love to improve the sketch, but for now,it's working just fine. My
        guess is that having a dedicated brain for the neopixels will make
        things run a lot smoother.
      </Text>
    </div>
    <img src={violinPhoto5} alt="hovalin-electronics" />
    <img src={violinPhoto6} alt="hovalin-power-input" />
    <div>
      <Text>
        The violin has a gamut of connections rolling out of it. I didn't get a
        proper photo, but the Teensy on/off switch works by breaking a USB
        cable's 5V (red wire).
      </Text>
    </div>
    <img src={violinPhoto7} alt="hovalin-power-enclosure" />
    <div>
      <Text>Last, but not least, we painted in the H logo on the Hovalin.</Text>
    </div>
    <img src={violinPhoto8} alt="hovalin-logo" />
    <div>
      <Text>
        Well, there you have it, our 5 string Synesthesia Projector Hovalin is
        built and working. Can't wait to post more videos of it in action soon.
      </Text>
    </div>
    <img src={violinPhoto9} alt="hovalin-top-view" />
  </BlogContainer>
);

export default OurFiveStringSynesthesiaViolin;
