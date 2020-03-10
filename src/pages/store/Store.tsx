import React from "react";
import { Button, Text } from "@hova-labs/bento-box-web";
import hovalin from "./hovalinv4.png";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";
import { InputsSelectColor } from "../../components/Inputs/InputsSelectColor/InputsSelectColor";

export const Store: React.FC<{}> = () => (
  <ContainerWithBorder>
    <div style={{ display: "flex" }}>
      <div>
        <img src={hovalin} alt="hovalin" style={{ height: "70vh" }} />
      </div>
      <div>
        <Text typography="headingLarge">The Hovalin</Text>

        <Text typography="headingSmall">$600</Text>
        <div>
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
        </div>
        <div>
          <InputsSelectColor onChange={() => {}} />
        </div>
        <div>
          <Button onPress={() => {}} title="Purchase" variant="primary" />
        </div>
        <div>
          <Text typography="bodyText">NOTE:</Text>
        </div>
        <div>
          All violin parts are printed with Hatchbox PLA filament. Gold, Silver,
          Bronze, and Copper are reference colors, and are not inferring that
          the violin will actually be made with any precious metal. Checkout
          Hatchbox PLA color here. Official Hovalins come with a hovalin logo
          embeded on the tailpiece.
        </div>
        <div>All parts are made to order. Shipping estimate is 2 weeks.</div>
        <div>
          Shipping outsite of continental United States will be subject to an
          extra charge.
        </div>
      </div>
    </div>
  </ContainerWithBorder>
);
