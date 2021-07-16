import { List, makeStyles } from "@material-ui/core";
import { FC, useContext } from "react";
import { Context } from "../services/DataContext";
import CompanyCard from "./CompanyCard";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
}));

const CompanyList: FC = () => {
  const { companies } = useContext(Context);

  const classes = useStyles();

  return (
    <List className={classes.root}>
      {companies.map((company) => (
        <CompanyCard company={company} key={company.name} />
      ))}
    </List>
  );
};

export default CompanyList;
