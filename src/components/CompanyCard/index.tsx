import { Typography, Card, CardContent } from "@material-ui/core";
import { FC } from "react";
import Company from "../../types/Company";
import { getNorwegianJobType } from "../../types/enums/JobType";
import SmallChip from "../SmallChip";
import useStyles from "./style";

interface ICompanyCardProps {
  company: Company;
}

const CompanyCard: FC<ICompanyCardProps> = ({ company }) => {
  const classes = useStyles();

  return (
    <Card>
      <img
        src={company.logo}
        alt={`${company.name} Logo`}
        style={{ margin: "15px", width: "calc(100% - 30px)" }}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{company.name}</Typography>
        <div>
          {company.jobTypes.map((jt) => (
            <SmallChip text={getNorwegianJobType(jt)} />
          ))}
        </div>
        <div>
          {company.hasDataBachelor && <SmallChip text={"Data"} bachelor />}
          {company.hasElectroBachelor && (
            <SmallChip text={"Elektro"} bachelor />
          )}
          {company.hasDataMaster && <SmallChip text={"Data"} master />}
          {company.hasElectroMaster && <SmallChip text={"Elektro"} master />}
        </div>
        <Typography variant="body1">{company.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
