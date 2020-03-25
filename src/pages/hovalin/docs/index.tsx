import React from "react";
import { Hero } from "./Hero";
import { LinkList } from "./LinkList";
import { Warning } from "./Warning";
import { ShoppingList } from "./ShoppingList";
import { PrintParts } from "./PrintParts";
import { CleanUp } from "./CleanUp";
import { InstallTunerPegs } from "./InstallTunerPegs";
import { Assemble } from "./Assemble";
import { InstallStrings } from "./InstallStrings";
import { NavigationFooter } from "../../../components/Navigation/NavigationFooter";

const Hovalin: React.FC<{}> = () => (
  <div>
    <Hero />
    <LinkList />
    <Warning />
    <ShoppingList />
    <PrintParts />
    <CleanUp />
    <InstallTunerPegs />
    <Assemble />
    <InstallStrings />
    <NavigationFooter />
  </div>
);

export default Hovalin;
