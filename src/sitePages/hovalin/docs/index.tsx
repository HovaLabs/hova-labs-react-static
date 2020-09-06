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
import { ViolinTypeSelector } from "./ViolinTypeSelector";
import { HovalinSelectionContextProvider } from "./HovalinSelectionContext";
import Layout from "../../../components/layout";

const Hovalin: React.FC<{}> = () => {
  return (
    <HovalinSelectionContextProvider>
      <Layout>
        <div>
          <Hero />
          <ViolinTypeSelector />
          <LinkList />
          <Warning />
          <ShoppingList />
          <PrintParts />
          <CleanUp />
          <InstallTunerPegs />
          <Assemble />
          <InstallStrings />
        </div>
      </Layout>
    </HovalinSelectionContextProvider>
  );
};

export default Hovalin;
