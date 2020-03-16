import React, { useState } from "react";
import { Button, Text } from "@hova-labs/bento-box-web";
import hovalin from "./hovalinv4.png";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";
import { InputsSelect } from "../../components/Inputs/InputsSelect/InputsSelect";
import * as S from "./StoreStyles";

export const Store: React.FC<{}> = () => {
  const [color, setColor] = useState("black");
  return (
    <ContainerWithBorder>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={hovalin} alt="hovalin" style={{ height: "70vh" }} />
        <div>
          <Text typography="headingLarge">The Hovalin</Text>

          <S.TextCost>
            <Text typography="headingSmall">$600</Text>
          </S.TextCost>
          <S.TextIncludes>
            <Text typography="bodyText">Includes:</Text>
          </S.TextIncludes>
          <ul>
            <li>
              <Text typography="bodyText">3D printed parts</Text>
            </li>
            <li>
              <Text typography="bodyText">Carbon Fiber Rod</Text>
            </li>
            <li>
              <Text typography="bodyText">Tuners</Text>
            </li>
            <li>
              <Text typography="bodyText">Strings</Text>
            </li>
          </ul>

          <InputsSelect onChange={setColor} />

          <Button
            onPress={() => {
              console.log(color);
            }}
            title="Purchase"
            variant="primary"
          />
        </div>
      </div>
      <S.NoteArea>
        <Text typography="bodyText">Note:</Text>
        <Text typography="bodyText">
          All violin parts are printed with Hatchbox PLA filament. Gold, Silver,
          Bronze, and Copper are reference colors, and are not inferring that
          the violin will actually be made with any precious metal. Checkout
          Hatchbox PLA color here. Official Hovalins come with a hovalin logo
          embeded on the tailpiece.
        </Text>
        <Text typography="bodyText">
          All parts are made to order. Shipping estimate is 2 weeks.
        </Text>
        <Text typography="bodyText">
          Shipping outside of continental United States will be subject to an
          extra charge.
        </Text>
      </S.NoteArea>
    </ContainerWithBorder>
  );
};
