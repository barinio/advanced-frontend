import { render } from "react-dom";
import { Counter } from "./components/Counter/Counter";

render(
  <div>
    <p>Hello</p>
    <Counter />
  </div>,
  document.getElementById("root")
);
