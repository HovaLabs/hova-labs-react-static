import React from "react";
import hovalinHero from "./hovalin-hero.jpg";
import { Button } from "../../components";
import * as S from "./HovalinStyles";

export default (): React.ReactElement => (
  <div>
    <img alt="hovalin" src={hovalinHero} />
    <div>Hovalin</div>
    <div>Open Source, 3D printable acoustic violin v4.0.0</div>
    <S.ButtonContainer>
      <Button href="/hovalin/docs" onPress={() => {}} title="Make One" />
      <Button href="/store" onPress={() => {}} title="Buy One" />
      <Button
        href="https://www.reddit.com/r/hovalin_community/"
        onPress={() => {}}
        title="Discuss on Reddit"
      />
    </S.ButtonContainer>
  </div>
);
