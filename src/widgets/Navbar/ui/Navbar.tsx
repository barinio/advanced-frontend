import { classNames } from "shared/lib/classNames/classNames";

import * as cls from "./Navbar.module.scss";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
  theme?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.listLinks}>
        <AppLink theme={AppLinkTheme.INVERTED} to="./" className={cls.mainLink}>
          Go to Main
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to="./about">
          Go to About
        </AppLink>
      </div>
    </div>
  );
};
