import { List, makeStyles } from "@material-ui/core";
import { FC, useContext, useState } from "react";
import { Context } from "../services/DataContext";
import JobType from "../types/enums/JobType";
import Level from "../types/enums/Level";
import CompanyCard from "./CompanyCard";
import CompanyFilter from "./CompanyFilter";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
}));

const CompanyList: FC = () => {
  const { companies } = useContext(Context);

  // Filters
  const [jobTypes, setJobTypes] = useState<JobType[]>([]);
  const [levels, setLevels] = useState<Level[]>([]);

  const classes = useStyles();

  return (
    <>
      <CompanyFilter
        jobTypes={jobTypes}
        setJobTypes={setJobTypes}
        levels={levels}
        setLevels={setLevels}
      />
      <List className={classes.root}>
        {companies.map((company) => (
          <CompanyCard company={company} key={company.name} />
        ))}
      </List>
    </>
  );
};

export default CompanyList;
