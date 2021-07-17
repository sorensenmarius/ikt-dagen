import { List, makeStyles } from "@material-ui/core";
import { FC, useContext, useState } from "react";
import { Context } from "../services/DataContext";
import Company from "../types/Company";
import JobType from "../types/enums/JobType";
import Level from "../types/enums/Level";
import {
  BachelorStudyProgram,
  MasterStudyProgram,
} from "../types/enums/StudyProgram";
import CompanyCard from "./CompanyCard";
import CompanyFilter from "./CompanyFilter";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
}));

interface ICompanyListProps {
  level?: Level;
  jobTypesProp?: JobType[];
  studyProgram?: string;
  master?: MasterStudyProgram;
  bachelor?: BachelorStudyProgram;
}

const CompanyList: FC<ICompanyListProps> = ({
  level,
  jobTypesProp,
  studyProgram,
  master,
  bachelor,
}) => {
  const { companies } = useContext(Context);

  const [jobTypes, setJobTypes] = useState<JobType[]>(jobTypesProp ?? []);
  const [levels, setLevels] = useState<Level[]>(level ? [level] : []);

  const classes = useStyles();

  const jobTypesFilter = (c: Company) => {
    if (jobTypes.length === 0) {
      return true;
    }

    return jobTypes.some((type) => c.jobTypes.includes(type));
  };

  const levelsFilter = (c: Company) => {
    if (levels.length === 0) {
      return true;
    }

    return levels.some((level) => c.levels.includes(level));
  };

  const filteredCompanies = companies.filter(
    (c) => jobTypesFilter(c) && levelsFilter(c)
  );

  return (
    <>
      <CompanyFilter
        jobTypes={jobTypes}
        setJobTypes={setJobTypes}
        levels={levels}
        setLevels={setLevels}
      />
      <List className={classes.root}>
        {filteredCompanies.map((company) => (
          <CompanyCard company={company} key={company.name} />
        ))}
      </List>
    </>
  );
};

export default CompanyList;
