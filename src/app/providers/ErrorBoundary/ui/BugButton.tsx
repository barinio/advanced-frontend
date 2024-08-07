import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

// Компонент для тестування ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error("Це спеціально створена помилка для демонстрації ErrorBoundary.");
    }
  }, [error]);

  return <Button onClick={onThrow}>{t("throwError")}</Button>;
};
