import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="./">Go to Main</Link>
      <br />
      <Link to="./about">Go to About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>

      <button onClick={toggleTheme}>Toggle</button>
      <p className="red">Red</p>
    </div>
  );
};

export default App;
