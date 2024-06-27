import { Link } from "react-router-dom";

import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="./">Go to Main</Link>
      <br />
      <Link to="./about">Go to About</Link>

      <AppRouter />

      <button onClick={toggleTheme}>Toggle</button>
      <p className="red">Red</p>
    </div>
  );
};

export default App;
