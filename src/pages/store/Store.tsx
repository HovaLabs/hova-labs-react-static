import React from "react";
import { Button, Text } from "@hova-labs/bento-box-web";
import hovalin from "./hovalinv4.png";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";
import { InputsSelect } from "../../components/Inputs/InputsSelect/InputsSelect";

export const Store: React.FC<{}> = () => (
  <ContainerWithBorder>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={hovalin} alt="hovalin" style={{ height: "70vh" }} />
      <div>
        <Text typography="headingLarge">The Hovalin</Text>

        <Text typography="headingSmall">$600</Text>
        <Text typography="bodyText">Includes:</Text>
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

        <InputsSelect onChange={() => {}} />

        <Button onPress={() => {}} title="Purchase" variant="primary" />
      </div>
    </div>
    <div>
      <Text typography="bodyText">Note:</Text>
      <Text typography="bodyText">
        All violin parts are printed with Hatchbox PLA filament. Gold, Silver,
        Bronze, and Copper are reference colors, and are not inferring that the
        violin will actually be made with any precious metal. Checkout Hatchbox
        PLA color here. Official Hovalins come with a hovalin logo embeded on
        the tailpiece.
      </Text>
      <Text typography="bodyText">
        All parts are made to order. Shipping estimate is 2 weeks.
      </Text>
      <Text typography="bodyText">
        Shipping outside of continental United States will be subject to an
        extra charge.
      </Text>
    </div>
  </ContainerWithBorder>
);
