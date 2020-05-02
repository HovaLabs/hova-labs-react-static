import React from "react";
import hovalinHero from "./media/hovalin-hero.jpg";
import hovalinAbout from "./media/hovalinv4.png";
import makeHero from "./media/make-hero.jpg";
import { routes } from "../../../routes";
import Layout from "../../../components/layout";
import { TitlePrimary } from "../../../components/Title/TitlePrimary/TitlePrimary";

import { Button, Text } from "../../../components";
import {
  ContainerWithBorder,
  ContainerFlex,
  ContainerContent,
} from "../../../components/Container";
import * as S from "./HovalinStyles";

export const Hovalin: React.FC<{}> = () => (
  <Layout>
    <div>
      <ContainerWithBorder
        backgroundImage={hovalinHero}
        backgroundImageStyles={{ opacity: 0.2 }}
      >
        <div>
          <Text typography="headingLarge">Hovalin</Text>
        </div>
        <div>
          <Text typography="headingSmall">
            Open Source, 3D printable acoustic violin v4.0.0
          </Text>
        </div>
        <div>
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
        </div>
      </ContainerWithBorder>
      <ContainerWithBorder>
        <ContainerFlex>
          <ContainerContent disablePadding flexXL="50">
            <img src={hovalinAbout} alt="hovalin" width="50%" />
          </ContainerContent>
          <ContainerContent disablePadding flexXL="50">
            <TitlePrimary subtitle="About" title="A violin for Makers" />
            <Text typography="bodyText">
              The hovalin is a functional acoustic violin that can be produced
              using most standard consumer 3d printers. The total cost of raw
              materials for the violin (4/4) is currently about $70. The hovalin
              was designed with Autodesk Fusion 360, and its shape and
              dimensions are inspired by the Stradivarius violin model. The
              hovalin project is inspired in part by David Perry's FFFiddle.
              Check it out here. Read our FAQ
            </Text>
            <S.ButtonPadding>
              <Button
                href={routes.HOVALIN_FAQ}
                title="Read our FAQ"
                onPress={() => {}}
              />
            </S.ButtonPadding>
          </ContainerContent>
        </ContainerFlex>
      </ContainerWithBorder>
      <ContainerWithBorder>
        <TitlePrimary
          subtitle="Listen up"
          title="But what does it sound like?"
        />
        <iframe
          title="Hovalin Preview Video"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/YbcQXEyzreA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </ContainerWithBorder>
      <ContainerWithBorder
        backgroundImage={makeHero}
        backgroundImageStyles={{ opacity: 0.2 }}
      >
        <div>
          <Text typography="headingLarge">Let's make one</Text>
        </div>
        <div>
          <Text typography="headingSmall">
            Visit the Hovalin Docs for step by step instructions
          </Text>
        </div>
        <S.ButtonPadding>
          <Button
            href={routes.HOVALIN_DOCS}
            title="Make a Hovalin"
            onPress={() => {}}
          />
        </S.ButtonPadding>
      </ContainerWithBorder>
    </div>
  </Layout>
);
