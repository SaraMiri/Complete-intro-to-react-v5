import { createContext, SetStateAction } from "react";

const ThemeContext = createContext<[string, SetStateAction<string>]>([
  "green",
  obj => obj
]);

export default ThemeContext;
