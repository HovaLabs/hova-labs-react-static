import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import threeDPrinter from "./Photos/threeDPrinter.svg";
import hovalinNeck from "./Photos/hovalin-neck.svg";
import hovalinBody from "./Photos/hovalin-body.svg";
import { Button } from "../../../components";
import { routes } from "../../../routes";
import {
  ContainerFlex,
  ContainerFullWidth,
  ContainerHalfWidth,
  ContainerWithBorder,
} from "../../../components/Container";

export const PrintParts: React.FC<{}> = () => (
  <>
    <ContainerWithBorder>
      <ContainerFlex>
        <ContainerHalfWidth>
          <Text typography="headingLarge">2</Text>
          <Text typography="headingSmall">Print Parts</Text>
          <br />
        </ContainerHalfWidth>
      </ContainerFlex>
      <ContainerFlex>
        <ContainerHalfWidth>
          <img src={threeDPrinter} alt="3d printer" />
        </ContainerHalfWidth>
        <ContainerHalfWidth>
          <Text typography="headingSmall">New to 3D printing?</Text>
          <div>
            In order to make the violin we’re going to need a 3D printer. It
            needs to be wide enough to print the neck (~300mm) and tall enough
            to print the violin body (~360mm).
          </div>
          <br />
          <Text typography="headingSmall">First Layer Problems</Text>
          <div>
            A majority of the problems from 3d printing can stem from the first
            layer not adhering properly to the print bed. We recommend taking
            the following precautions when printing:
          </div>
          <ul>
            <li>Always make sure the bed is properly leveled.</li>
            <li>
              Put down fresh blue tape if any of the print area's tape shows
              signs of peeling.
            </li>
          </ul>
        </ContainerHalfWidth>
      </ContainerFlex>
      <ContainerFullWidth>
        <div>* extra credit *</div>
        <div>
          Sand the blue tape with 100 grit sandpaper to help prevent warping
        </div>
        <div>
          We're not trying to write the book on 3d printing. A great first step
          down the rabbit hole can be found
          <a href="https://reddit.com/r/3dprinting"> here.</a>
        </div>
        <div>
          All together, the violin will take ~500 grams of plastic to print.
          Assuming there aren't too many failed prints, you should be able to
          make the entire hovalin with a single 1kg roll of plastic.
        </div>
      </ContainerFullWidth>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <ContainerFlex>
        <ContainerHalfWidth>
          <Text typography="headingMedium">The Neck</Text>
          <Text typography="bodyText">10 PRINT HOURS | 90g PLASTIC </Text>
          <Text typography="bodyText">Layer Height: 0.2mm </Text>
          <Text typography="bodyText">Infill: 30% </Text>
          <Text typography="bodyText">Perimeters: 3 </Text>
          <br />
          <Button
            href={routes.HOVALIN_DOCS}
            title="DOWNLOAD"
            onPress={() => {}}
          />
        </ContainerHalfWidth>
        <ContainerHalfWidth>
          <img width="100%" src={hovalinNeck} alt="hovalin neck" />
        </ContainerHalfWidth>
      </ContainerFlex>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <ContainerFlex>
        <ContainerHalfWidth>
          <Text typography="headingMedium">The Body</Text>
          <Text typography="bodyText">33 PRINT HOURS | 390g PLASTIC</Text>
          <Text typography="bodyText">Layer Height: 0.3mm</Text>
          <Text typography="bodyText">Infill: 30%</Text>
          <Text typography="bodyText">Perimeters: 2</Text>
          <br />
          <Button
            href={routes.HOVALIN_DOCS}
            title="DOWNLOAD"
            onPress={() => {}}
          />
        </ContainerHalfWidth>
        <ContainerHalfWidth>
          <img width="100%" src={hovalinBody} alt="hovalin body" />
        </ContainerHalfWidth>
      </ContainerFlex>
    </ContainerWithBorder>
  </>
);
