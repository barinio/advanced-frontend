import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
  theme?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.listLinks}>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          to={RoutePaths.main}
          className={cls.mainLink}
        >
          {t("linkToMain")}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePaths.about}>
          {t("linkToAbout")}
        </AppLink>
      </div>
    </div>
  );
};
