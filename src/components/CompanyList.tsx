import { List } from "@material-ui/core";
import { FC, useContext } from "react";
import { Context } from "../services/DataContext";
import CompanyCard from "./CompanyCard";

const CompanyList: FC = () => {
  const { companies } = useContext(Context);

  return (
    <List>
      {companies.map((company) => (
        <CompanyCard company={company} key={company.name} />
      ))}
    </List>
  );
};

export default CompanyList;
