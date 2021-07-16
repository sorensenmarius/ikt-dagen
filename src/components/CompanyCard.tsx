import { Typography, Avatar, Paper } from "@material-ui/core";
import { FC } from "react";
import Company from "../types/Company";

interface ICompanyCardProps {
  company: Company;
}

const CompanyCard: FC<ICompanyCardProps> = ({ company }) => {
  return (
    <Paper>
      <Avatar src={company.logo} />
      <Typography variant="h3">{company.name}</Typography>
    </Paper>
  );
};

export default CompanyCard;
