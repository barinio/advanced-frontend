import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";

import Counter from "./components/Counter";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Link to="./">Go to Main</Link>
      <br />
      <Link to="./about">Go to About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageLazy />} />
          <Route path={"/about"} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>

      <button onClick={toggleTheme}>Toggle</button>
      <p className="red">Red</p>

      <Counter />
    </div>
  );
};

export default App;
