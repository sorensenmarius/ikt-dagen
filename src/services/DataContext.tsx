import { CircularProgress, Typography } from "@material-ui/core";
import { createContext, FC } from "react";
import useFetch from "../hooks/useFetch";
import Company from "../types/Company";
import { IContext, ISheetsResponse } from "../types/DataTypes";

const emptyData: IContext = {
  companies: [],
};

export const Context = createContext(emptyData);

const DataContext: FC = ({ children }) => {
  const { isLoading, data } = useFetch<ISheetsResponse>(
    `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values/Responses!B2:Z50?key=${process.env.REACT_APP_SHEETS_API_KEY}`
  );

  if (isLoading)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  if (!data)
    return (
      <div>
        <Typography variant="h3" color="error">
          Error loading company data
        </Typography>
      </div>
    );

  const defaultData: IContext = {
    companies: data?.values
      .filter((d) => d.length === 13)
      .map(Company.fromSheets),
  };

  return <Context.Provider value={defaultData}>{children}</Context.Provider>;
};

export default DataContext;
