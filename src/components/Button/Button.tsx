import React from "react";
import { Button as ButtonBB, ButtonProps } from "@hova-labs/bento-box-web";
import { Link } from "@reach/router";

const isExternalHref = (href: string): boolean => /^https?:\/\//i.test(href);

// If we pass an href, we want to try to route there using react-static's router
const ButtonLinkWrapper = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}): React.ReactElement => {
  if (href) {
    if (isExternalHref(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <Link to={href}>{children}</Link>;
  }

  return <>{children}</>;
};

export const Button = ({ href, ...rest }: ButtonProps): React.ReactElement => (
  <ButtonLinkWrapper href={href}>
    <ButtonBB {...rest} />
  </ButtonLinkWrapper>
);
