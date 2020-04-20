import React from "react";
import { Text } from "../../components";
import {
  ContainerWithBorder,
  ContainerFlex,
  ContainerContent,
} from "../../components/Container";
import * as S from "./ContactStyles";
import Layout from "../../components/layout";

export const Contact: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder lineVariant="hero">
      <ContainerFlex>
        <ContainerContent flexXL="100">
          <S.OuterContainer>
            <Text typography="headingLarge">
              Contact us to talk about a project or just to say hello!
            </Text>
            <S.EmailContainer>
              <a href="mailto:hello@hovalabs.com">
                <Text typography="headingSmall" color="primary">
                  hello@hovalabs.com
                </Text>
              </a>
            </S.EmailContainer>
          </S.OuterContainer>
        </ContainerContent>
      </ContainerFlex>
    </ContainerWithBorder>
  </Layout>
);
