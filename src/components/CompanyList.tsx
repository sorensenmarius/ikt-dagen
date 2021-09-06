import { Fab, List, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  const jobTypes = filterState?.jobTypes ?? [];

  const levels = filterState?.level ? [filterState.level] : [];

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
        <Fab
          color="secondary"
          style={{ position: "fixed", bottom: 5, right: 5, zIndex: 1 }}
          onClick={() => history.push("/about-you")}
        >
          <Search />
        </Fab>
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
