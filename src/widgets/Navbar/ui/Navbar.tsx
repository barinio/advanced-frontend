import { classNames } from "shared/lib/classNames/classNames";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
  theme?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
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
