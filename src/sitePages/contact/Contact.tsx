import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../components/Container/ContainerWithBorder";
import * as S from "./ContactStyles";
import Layout from "../../components/layout";

export const Contact: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder lineVariant="hero">
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
    </ContainerWithBorder>
  </Layout>
);
