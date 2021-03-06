import React from "react";
import { Icon } from "@hova-labs/bento-box-web";
import { Text } from "../../../components";
import { shoppingList } from "./ShoppingListData";
import {
  ContainerFlex,
  ContainerContent,
  ContainerWithBorder,
} from "../../../components/Container";
import * as S from "./ShoppingListStyles";

export const ShoppingList: React.FC<{}> = () => (
  <div id="shopping-list">
    <ContainerWithBorder>
      <ContainerFlex>
        <ContainerContent disablePadding flexXL="50">
          <div>
            <Text typography="headingLarge">1</Text>
          </div>
          <div>
            <Text typography="headingSmall">Shopping List</Text>
          </div>
        </ContainerContent>
      </ContainerFlex>
      <ContainerFlex>
        {shoppingList.map((item) => (
          <ContainerContent flexXL="50">
            <S.Title>
              <Icon size={32} IconComponent={item.icon} />
              <Text typography="headingSmall">{item.title}</Text>
            </S.Title>
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
  </div>
);
