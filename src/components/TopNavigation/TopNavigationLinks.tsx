import React from "react";
import { Link } from "@reach/router";
import { Text } from "@hova-labs/bento-box-web";
import { NavLink } from "../types";
import { Li } from "./TopNavigationStyles";
import { routes } from "../../routes";

const topNavLinks: Array<NavLink> = [
  { url: routes.HOMEPAGE, name: "Home" }, // always keep home as first link
  { url: routes.PROJECTS, name: "Projects" },
  { url: routes.BLOG, name: "Blog" },
  { url: routes.STORE, name: "Store" },
  { url: routes.CONTACT, name: "Contact" },
];

export const desktopNavLinksArray: Array<NavLink> = topNavLinks.slice(1);
export const mobileNavLinksArray: Array<NavLink> = topNavLinks;

export const desktopNavLinks = desktopNavLinksArray.map(
  (
    link // Slice to remove "Home" since it's on the logo
  ) => {
    const { url, name } = link;
    return (
      <Li key={name}>
        <Link to={url}>
          <Text typography="headingSmall">{name}</Text>
        </Link>
      </Li>
    );
  }
);

export const MobileNavLinks = ({
  onPress,
}: {
  onPress: () => void;
}): React.ReactElement => (
  <>
    {mobileNavLinksArray.map(link => {
      const { url, name } = link;
      return (
        <Li key={name}>
          <Link to={url} onClick={onPress}>
            <Text typography="headingSmall">{name}</Text>
          </Link>
        </Li>
      );
    })}
  </>
);
