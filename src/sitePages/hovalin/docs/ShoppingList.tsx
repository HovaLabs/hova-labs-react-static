import React from "react";
import { Icon, Text } from "@hova-labs/bento-box-web";
import { shoppingList } from "./ShoppingListData";
import {
  ContainerFlex,
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";
import * as S from "./ShoppingListStyles";

export const ShoppingList: React.FC<{}> = () => (
  <ContainerWithBorder>
    <ContainerFlex>
      <ContainerContent flexXL="50">
        <Text typography="headingLarge">1</Text>
        <Text typography="headingSmall">Shopping List</Text>
        <br />
      </ContainerContent>
    </ContainerFlex>
    <ContainerFlex>
      {shoppingList.map((item) => (
        <ContainerContent flexXL="50">
          <Icon size={32} IconComponent={item.icon} />
          <Text typography="headingSmall">{item.title}</Text>
          <Text typography="bodyText">{item.description}</Text>
          <ul>
            {item.list.map((li) => (
              <li>
                <S.Link href={li.link}>
                  <div>{li.name}</div>
                </S.Link>
              </li>
            ))}
          </ul>
        </ContainerContent>
      ))}
    </ContainerFlex>
  </ContainerWithBorder>
);
