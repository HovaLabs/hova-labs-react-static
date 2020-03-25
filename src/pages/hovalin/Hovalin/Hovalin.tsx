import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import hovalinHero from "./media/hovalin-hero.jpg";
import hovalinAbout from "./media/hovalinv4.png";
import makeHero from "./media/make-hero.jpg";
import { routes } from "../../../routes";

import { Button } from "../../../components";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";
import * as S from "./HovalinStyles";

export const Hovalin: React.FC<{}> = () => (
  <div>
    <ContainerWithBorder
      backgroundImage={hovalinHero}
      backgroundImageStyles={{ opacity: 0.2 }}
    >
      <Text typography="headingLarge">Hovalin</Text>
      <Text typography="headingSmall">
        Open Source, 3D printable acoustic violin v4.0.0
      </Text>
      <S.ButtonPadding>
        <Button
          href={routes.HOVALIN_DOCS}
          onPress={() => {}}
          title="Make One"
        />
      </S.ButtonPadding>
      <S.ButtonPadding>
        <Button href={routes.STORE} onPress={() => {}} title="Buy One" />
      </S.ButtonPadding>
      <S.ButtonPadding>
        <Button
          href={routes.HOVALIN_REDDIT}
          onPress={() => {}}
          title="Discuss on Reddit"
        />
      </S.ButtonPadding>
    </ContainerWithBorder>
    <div>
      <img src={hovalinAbout} alt="hovalin" />
      <h1>About</h1>
      <h2>A Violin for Makers</h2>
      <div>
        The hovalin is a functional acoustic violin that can be produced using
        most standard consumer 3d printers. The total cost of raw materials for
        the violin (4/4) is currently about $70. The hovalin was designed with
        Autodesk Fusion 360, and its shape and dimensions are inspired by the
        Stradivarius violin model. The hovalin project is inspired in part by
        David Perry's FFFiddle. Check it out here. Read our FAQ
      </div>
      <Button
        href={routes.HOVALIN_FAQ}
        title="Read our FAQ"
        onPress={() => {}}
      />
    </div>
    <div>
      <img src={makeHero} alt="making a violin" />
      <h1>Let's make one</h1>
      <div>Visit the Hovalin Docs for step by step instructions</div>
      <Button
        href={routes.HOVALIN_DOCS}
        title="Make a Hovalin"
        onPress={() => {}}
      />
    </div>
    <div>
      <h2>Listen Up</h2>
      <h1>But what does it sound like?</h1>
      <iframe
        title="Hovalin Preview Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YbcQXEyzreA"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);
