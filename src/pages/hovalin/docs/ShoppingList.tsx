import React from "react";
import { Icon, Text } from "@hova-labs/bento-box-web";
import { ContainerWithBorder } from "../../../components/Container/ContainerWithBorder";
import { shoppingList } from "./ShoppingListData";
import * as S from "./ShoppingListStyles";

export const ShoppingList: React.FC<{}> = () => (
  <ContainerWithBorder>
    <div>
      <Text typography="headingLarge">1</Text>
      <Text typography="headingSmall">Shopping List</Text>
    </div>
    <br />
    <S.List>
      {shoppingList.map(item => (
        <S.ListItem>
          <div>
            <Icon size={32} IconComponent={item.icon} />
            <Text typography="headingSmall">{item.title}</Text>
            <Text typography="bodyText">{item.description}</Text>
            <ul>
              {item.list.map(li => (
                <li>
                  <S.Link href={li.link}>
                    <div>{li.name}</div>
                  </S.Link>
                </li>
              ))}
            </ul>
          </div>
        </S.ListItem>
      ))}
    </S.List>
  </ContainerWithBorder>
);
