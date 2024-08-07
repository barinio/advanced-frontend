import { LinkProps, Link } from "react-router-dom";

import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  INVERTED = "inverted"
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
