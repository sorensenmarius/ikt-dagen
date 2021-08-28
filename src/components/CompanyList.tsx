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

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
}));

interface ICompanyListProps {
  filterState?: ICompanyFilterState;
}

export interface ICompanyFilterState {
  level?: Level;
  jobTypes?: JobType[];
  studyProgram?: string;
  master?: MasterStudyProgram;
  bachelor?: BachelorStudyProgram;
}

const CompanyList: FC<ICompanyListProps> = ({ filterState }) => {
  const { companies } = useContext(Context);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [jobTypes, setJobTypes] = useState<JobType[]>(
    filterState?.jobTypes ?? []
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [levels, setLevels] = useState<Level[]>(
    filterState?.level ? [filterState.level] : []
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [masters, setMasters] = useState<MasterStudyProgram[]>(
    filterState?.master ? [filterState.master] : []
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bachelors, setBachelors] = useState<BachelorStudyProgram[]>(
    filterState?.bachelor ? [filterState.bachelor] : []
  );

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
      <div style={{ padding: "15px" }}>
        {/* <CompanyFilter
        jobTypes={jobTypes}
        setJobTypes={setJobTypes}
        levels={levels}
        setLevels={setLevels}
        masters={masters}
        setMasters={setMasters}
        bachelors={bachelors}
        setBachelors={setBachelors}
      /> */}
        <List className={classes.root}>
          {filteredCompanies.map((company) => (
            <CompanyCard company={company} key={company.name} />
          ))}
        </List>
      </div>
    </>
  );
};

export default CompanyList;
