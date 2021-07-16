import { Chip, makeStyles } from "@material-ui/core";
import { FC } from "react";
import JobType, { getNorwegianJobType } from "../types/enums/JobType";
import Level, { getNorwegianLevelName } from "../types/enums/Level";
import mapEnum from "../utils/mapEnum";

interface ICompanyFilterProps {
  jobTypes: JobType[];
  setJobTypes: (jobTypes: JobType[]) => void;
  levels: Level[];
  setLevels: (levels: Level[]) => void;
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  active: {
    backgroundColor: "red",
  },
}));

const CompanyFilter: FC<ICompanyFilterProps> = ({
  jobTypes,
  setJobTypes,
  levels,
  setLevels,
}) => {
  const classes = useStyles();

  const handleJobTypeChange = (jobType: JobType) => {
    if (jobTypes.includes(jobType)) {
      setJobTypes(jobTypes.filter((jt) => jt !== jobType));
    } else {
      setJobTypes([...jobTypes, jobType]);
    }
  };

  const handleLevelChange = (level: Level) => {
    if (levels.includes(level)) {
      setLevels(levels.filter((l) => l !== level));
    } else {
      setLevels([...levels, level]);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        {mapEnum(Level, (key: Level) => (
          <Chip
            label={getNorwegianLevelName(key) + " klasse"}
            className={levels.includes(key) ? classes.active : ""}
            onClick={() => handleLevelChange(key)}
          />
        ))}
      </div>
      <div>
        {mapEnum(JobType, (key: JobType) => (
          <Chip
            label={getNorwegianJobType(key)}
            className={jobTypes.includes(key) ? classes.active : ""}
            onClick={() => handleJobTypeChange(key)}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyFilter;
