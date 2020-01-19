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

export const desktopNavLinks = desktopNavLinksArray.map((
  l // Slice to remove "Home" since it's on the logo
) => (
  <Link to={l.url}>
    <Text typography="headingSmall">{l.name}</Text>
  </Link>
));

export const mobileNavLinks = mobileNavLinksArray.map(l => {
  return (
    <div key={l.url}>
      <Link to={l.url}>
        <Text typography="headingSmall">{l.name}</Text>
      </Link>
    </div>
  );
});
