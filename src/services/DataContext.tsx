import { createContext, FC } from "react";
import data from "../assets/data";

export const Context = createContext(data);

const DataContext: FC = ({ children }) => {
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default DataContext;
