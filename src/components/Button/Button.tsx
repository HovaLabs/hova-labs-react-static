import React from "react";
import { Link } from "gatsby";
import { ButtonProps } from "./ButtonProps";

import * as S from "./ButtonStyles";

const ButtonComponent = ({
  disabled,
  className,
  // href,
  variant,
  // size,
  onPress,
  style,
  title,
}: ButtonProps): React.ReactElement => {
  return (
    <S.Button
      className={className}
      variant={variant}
      disabled={disabled}
      onPress={onPress}
      style={style}
    >
      <S.Text variant={variant} disabled={disabled}>
        {title}
      </S.Text>
    </S.Button>
  );
};
ButtonComponent.defaultProps = {
  variant: "primary",
};

const isExternalHref = (href: string): boolean => /^https?:\/\//i.test(href);

// If we pass an href, we want to try to route there using react-static's router
const ButtonLinkWrapper: React.FC<{
  children: React.ReactNode;
  href?: string;
}> = ({ children, href }) => {
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

export const Button: React.FC<ButtonProps> = ({ href, ...rest }) => (
  <ButtonLinkWrapper href={href}>
    <ButtonComponent {...rest} />
  </ButtonLinkWrapper>
);
