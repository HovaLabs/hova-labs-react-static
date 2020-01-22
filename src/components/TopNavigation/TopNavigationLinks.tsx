import React from "react";
import { Link } from "@reach/router";
import { Text } from "@hova-labs/bento-box-web";
import { NavLink } from "../types";

const topNavLinks: Array<NavLink> = [
  { url: "/", name: "Home" }, // always keep home as first link
  { url: "/projects", name: "Projects" },
  { url: "/blog", name: "Blog" },
  { url: "/store", name: "Store" },
  { url: "/contact", name: "Contact" },
];

export const desktopNavLinksArray: Array<NavLink> = topNavLinks.slice(1);
export const mobileNavLinksArray: Array<NavLink> = topNavLinks;

export const desktopNavLinks = desktopNavLinksArray.map(
  (
    link // Slice to remove "Home" since it's on the logo
  ) => {
    const { url, name } = link;
    return (
      <Link to={url}>
        <Text typography="headingSmall">{name}</Text>
      </Link>
    );
  }
);

export const mobileNavLinks = mobileNavLinksArray.map(link => {
  const { url, name } = link;
  return (
    <div key={url}>
      <Link to={url}>
        <Text typography="headingSmall">{name}</Text>
      </Link>
    </div>
  );
});
