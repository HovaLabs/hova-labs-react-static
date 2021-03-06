import React from "react";
import ReactGA from "react-ga";
import { Text, Button } from "../../../components";
import threeDPrinter from "./Photos/threeDPrinter.svg";
import { HovalinNeck } from "./Photos/hovalin-neck";
import { HovalinChamber } from "./Photos/hovalin-chamber";
import { HovalinChamberTop } from "./Photos/hovalin-chamber-top";
import { HovalinChamberMiddle } from "./Photos/hovalin-chamber-middle";
import { HovalinChamberBottom } from "./Photos/hovalin-chamber-bottom";
import { HovalinBridge } from "./Photos/hovalin-bridge";
import { HovalinNotches } from "./Photos/hovalin-notches";

import {
  ContainerFlex,
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";
import { HovalinSelectionContext } from "./HovalinSelectionContext";

export const PrintParts: React.FC<{}> = () => {
  const { isMultiPieceChamber, setIsDownloadModalOpen } = React.useContext(
    HovalinSelectionContext,
  );

  return (
    <div id="print-parts">
      <ContainerWithBorder>
        <ContainerFlex>
          <ContainerContent disablePadding flexXL="50">
            <div>
              <Text typography="headingLarge">2</Text>
            </div>
            <div>
              <Text typography="headingSmall">Print Parts</Text>
            </div>
          </ContainerContent>
        </ContainerFlex>
        <ContainerFlex>
          <ContainerContent disablePadding flexXL="50">
            <img src={threeDPrinter} alt="3d printer" />
          </ContainerContent>
          <ContainerContent disablePadding flexXL="50">
            <Text typography="headingSmall">New to 3D printing?</Text>
            <div>
              In order to make the violin we’re going to need a 3D printer. It
              needs to be wide enough to print the neck (~300mm) and tall enough
              to print the violin body (~360mm).
            </div>
            <Text typography="headingSmall">First Layer Problems</Text>
            <div>
              A majority of the problems from 3d printing can stem from the
              first layer not adhering properly to the print bed. We recommend
              taking the following precautions when printing:
            </div>
            <ul>
              <li>Always make sure the bed is properly leveled.</li>
              <li>
                Put down fresh blue tape if any of the print area's tape shows
                signs of peeling.
              </li>
            </ul>
          </ContainerContent>
        </ContainerFlex>
        <ContainerContent disablePadding flexXL="100">
          <div>* extra credit *</div>
          <div>
            Sand the blue tape with 100 grit sandpaper to help prevent warping
          </div>
          <div>
            We're not trying to write the book on 3d printing. A great first
            step down the rabbit hole can be found
            <a href="https://reddit.com/r/3dprinting"> here.</a>
          </div>
          <div>
            All together, the violin will take ~500 grams of plastic to print.
            Assuming there aren't too many failed prints, you should be able to
            make the entire hovalin with a single 1kg roll of plastic.
          </div>
        </ContainerContent>
      </ContainerWithBorder>
      <ContainerWithBorder>
        <ContainerFlex>
          <ContainerContent disablePadding flexXL="50">
            <div>
              <Text typography="headingMedium">The Neck</Text>
            </div>
            <div>
              <Text typography="bodyText">11 PRINT HOURS | 90g PLASTIC </Text>
            </div>
            <div>
              <Text typography="bodyText">Layer Height: 0.2mm </Text>
            </div>
            <div>
              <Text typography="bodyText">Infill: 30% </Text>
            </div>
            <div>
              <Text typography="bodyText">Perimeters: 3 </Text>
            </div>
            <Button
              title="DOWNLOAD"
              onPress={() => {
                setIsDownloadModalOpen(true);
                ReactGA.event({
                  category: "Hovalin_Docs",
                  action: "Download_v4_Neck_File",
                });
              }}
            />
          </ContainerContent>
          <ContainerContent disablePadding flexXL="50">
            <HovalinNeck />
          </ContainerContent>
        </ContainerFlex>
      </ContainerWithBorder>
      {isMultiPieceChamber ? (
        <>
          <ContainerWithBorder>
            <ContainerFlex>
              <ContainerContent disablePadding flexXL="50">
                <div>
                  <Text typography="headingMedium">The Body (Top)</Text>
                </div>
                <div>
                  <Text typography="bodyText">
                    12 PRINT HOURS | 150g PLASTIC
                  </Text>
                </div>
                <div>
                  <Text typography="bodyText">Layer Height: 0.3mm</Text>
                </div>
                <div>
                  <Text typography="bodyText">Infill: 30%</Text>
                </div>
                <div>
                  <Text typography="bodyText">Perimeters: 2</Text>
                </div>
                <Button
                  title="DOWNLOAD"
                  onPress={() => {
                    setIsDownloadModalOpen(true);
                    ReactGA.event({
                      category: "Hovalin_Docs",
                      action: "Download_v4_Body_File",
                    });
                  }}
                />
              </ContainerContent>
              <ContainerContent disablePadding flexXL="50">
                <HovalinChamberTop />
              </ContainerContent>
            </ContainerFlex>
          </ContainerWithBorder>
          <ContainerWithBorder>
            <ContainerFlex>
              <ContainerContent disablePadding flexXL="50">
                <div>
                  <Text typography="headingMedium">The Body (Middle)</Text>
                </div>
                <div>
                  <Text typography="bodyText">7 PRINT HOURS | 80g PLASTIC</Text>
                </div>
                <div>
                  <Text typography="bodyText">Layer Height: 0.3mm</Text>
                </div>
                <div>
                  <Text typography="bodyText">Infill: 30%</Text>
                </div>
                <div>
                  <Text typography="bodyText">Perimeters: 2</Text>
                </div>
                <Button
                  title="DOWNLOAD"
                  onPress={() => {
                    setIsDownloadModalOpen(true);
                    ReactGA.event({
                      category: "Hovalin_Docs",
                      action: "Download_v4_Body_File",
                    });
                  }}
                />
              </ContainerContent>
              <ContainerContent disablePadding flexXL="50">
                <HovalinChamberMiddle />
              </ContainerContent>
            </ContainerFlex>
          </ContainerWithBorder>
          <ContainerWithBorder>
            <ContainerFlex>
              <ContainerContent disablePadding flexXL="50">
                <div>
                  <Text typography="headingMedium">The Body (Bottom)</Text>
                </div>
                <div>
                  <Text typography="bodyText">
                    17 PRINT HOURS | 200g PLASTIC
                  </Text>
                </div>
                <div>
                  <Text typography="bodyText">Layer Height: 0.3mm</Text>
                </div>
                <div>
                  <Text typography="bodyText">Infill: 30%</Text>
                </div>
                <div>
                  <Text typography="bodyText">Perimeters: 2</Text>
                </div>
                <Button
                  title="DOWNLOAD"
                  onPress={() => {
                    setIsDownloadModalOpen(true);
                    ReactGA.event({
                      category: "Hovalin_Docs",
                      action: "Download_v4_Body_File",
                    });
                  }}
                />
              </ContainerContent>
              <ContainerContent disablePadding flexXL="50">
                <HovalinChamberBottom />
              </ContainerContent>
            </ContainerFlex>
          </ContainerWithBorder>
          <ContainerWithBorder>
            <ContainerFlex>
              <ContainerContent disablePadding flexXL="50">
                <div>
                  <Text typography="headingMedium">The Body (Notches)</Text>
                </div>
                <div>
                  <Text typography="bodyText">3 PRINT HOURS | 40g PLASTIC</Text>
                </div>
                <div>
                  <Text typography="bodyText">Layer Height: 0.3mm</Text>
                </div>
                <div>
                  <Text typography="bodyText">Infill: 30%</Text>
                </div>
                <div>
                  <Text typography="bodyText">Perimeters: 2</Text>
                </div>
                <Button
                  title="DOWNLOAD"
                  onPress={() => {
                    setIsDownloadModalOpen(true);
                    ReactGA.event({
                      category: "Hovalin_Docs",
                      action: "Download_v4_Body_File",
                    });
                  }}
                />
              </ContainerContent>
              <ContainerContent disablePadding flexXL="50">
                <HovalinNotches />
              </ContainerContent>
            </ContainerFlex>
          </ContainerWithBorder>
        </>
      ) : (
        <ContainerWithBorder>
          <ContainerFlex>
            <ContainerContent disablePadding flexXL="50">
              <div>
                <Text typography="headingMedium">The Body</Text>
              </div>
              <div>
                <Text typography="bodyText">36 PRINT HOURS | 400g PLASTIC</Text>
              </div>
              <div>
                <Text typography="bodyText">Layer Height: 0.3mm</Text>
              </div>
              <div>
                <Text typography="bodyText">Infill: 30%</Text>
              </div>
              <div>
                <Text typography="bodyText">Perimeters: 2</Text>
              </div>
              <Button
                title="DOWNLOAD"
                onPress={() => {
                  setIsDownloadModalOpen(true);
                  ReactGA.event({
                    category: "Hovalin_Docs",
                    action: "Download_v4_Body_File",
                  });
                }}
              />
            </ContainerContent>
            <ContainerContent disablePadding flexXL="50">
              <HovalinChamber />
            </ContainerContent>
          </ContainerFlex>
        </ContainerWithBorder>
      )}
      <ContainerWithBorder>
        <ContainerFlex>
          <ContainerContent disablePadding flexXL="50">
            <div>
              <Text typography="headingMedium">The Bridge</Text>
            </div>
            <div>
              <Text typography="bodyText">1 PRINT HOUR | 10g PLASTIC</Text>
            </div>
            <div>
              <Text typography="bodyText">Layer Height: 0.3mm</Text>
            </div>
            <div>
              <Text typography="bodyText">Infill: 30%</Text>
            </div>
            <div>
              <Text typography="bodyText">Perimeters: 2</Text>
            </div>
            <Button
              title="DOWNLOAD"
              onPress={() => {
                setIsDownloadModalOpen(true);
                ReactGA.event({
                  category: "Hovalin_Docs",
                  action: "Download_v4_Body_File",
                });
              }}
            />
          </ContainerContent>
          <ContainerContent disablePadding flexXL="50">
            <HovalinBridge />
          </ContainerContent>
        </ContainerFlex>
      </ContainerWithBorder>
    </div>
  );
};
