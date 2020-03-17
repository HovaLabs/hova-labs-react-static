import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../Container/ContainerWithBorder";
import { InputsText } from "../../Inputs/InputsText/InputsText";
import { InputsSubmit } from "../../Inputs/InputsSubmit/InputsSubmit";
import * as S from "./NavigationFooterStyles";

export const NavigationFooter: React.FC<{}> = () => (
  <>
    <ContainerWithBorder>
      <S.ContainerMailingList>
        <div>
          <Text typography="headingMedium">Join our mailing list</Text>
          <Text typography="bodyText">for updates and news</Text>
        </div>
        <S.Form>
          <S.InputArea>
            <Text typography="bodyText">First Name</Text>
            <InputsText type="text" placeholder="Hansel" />
          </S.InputArea>
          <S.InputArea>
            <Text typography="bodyText">Email</Text>
            <InputsText type="text" placeholder="H@hovalabs.com" />
          </S.InputArea>

          <InputsSubmit />
        </S.Form>
      </S.ContainerMailingList>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <S.ContainerCopyright>
        <Text typography="bodyText">
          {`Copyright Hova Labs 2019 - ${new Date().getFullYear().toString()}`}
        </Text>
      </S.ContainerCopyright>
    </ContainerWithBorder>
  </>
);
