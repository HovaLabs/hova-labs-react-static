import React from "react";
import ReactGA from "react-ga";
import { Text } from "../../components";
import hovalin from "./hovalinv4.png";
import { Button } from "../../components/Button/Button";
import {
  ContainerWithBorder,
  ContainerContent,
  ContainerFlex,
} from "../../components/Container";
import { InputsSelect } from "../../components/Inputs/InputsSelect/InputsSelect";
import * as S from "./StoreStyles";
import Layout from "../../components/layout";

export const Store: React.FC<{}> = () => {
  return (
    <Layout>
      <ContainerWithBorder lineVariant="store">
        <ContainerFlex>
          <ContainerContent disablePadding flexL="50">
            <img
              src={hovalin}
              alt="hovalin"
              style={{
                maxWidth: "400px",
                width: "100%",
              }}
            />
          </ContainerContent>

          <ContainerContent disablePadding flexL="50">
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
            <S.Divider />
            <Text typography="bodyText">Select Color</Text>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <InputsSelect />
              <Button
                onPress={() => {
                  // in order to submit the form we click a hidden submit button
                  // This allows us to use our design-system's button for input type="submit"
                  const paypalButton = document.getElementById("paypal-submit");
                  if (paypalButton) {
                    paypalButton.click();
                  }
                  ReactGA.event({
                    category: "Store",
                    action: "Purchase",
                  });
                }}
                type="submit"
                title="Purchase"
              />
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="XMM2C9UPENTNU"
              />
              <input type="hidden" name="on0" value="Color" />
              <input
                type="submit"
                value="submit"
                style={{ visibility: "hidden" }}
                id="paypal-submit"
              />
            </form>
          </ContainerContent>
        </ContainerFlex>

        <S.NoteArea>
          <ContainerFlex>
            <ContainerContent disablePadding flexXL="100">
              <div>
                <Text typography="bodyText">Note:</Text>
              </div>
              <div>
                <Text typography="bodyText">
                  All violin parts are printed with Hatchbox PLA filament. Gold,
                  Silver, Bronze, and Copper are reference colors, and are not
                  inferring that the violin will actually be made with any
                  precious metal. Checkout Hatchbox PLA color here. Official
                  Hovalins come with a hovalin logo embeded on the tailpiece.
                </Text>
              </div>
              <div>
                <Text typography="bodyText">
                  All parts are made to order. Shipping estimate is 2 weeks.
                </Text>
              </div>
              <div>
                <Text typography="bodyText">
                  Shipping outside of continental United States will be subject
                  to an extra charge.
                </Text>
              </div>
            </ContainerContent>
          </ContainerFlex>
        </S.NoteArea>
      </ContainerWithBorder>
    </Layout>
  );
};
