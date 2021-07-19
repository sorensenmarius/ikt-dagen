import { Chip, makeStyles } from "@material-ui/core";
import { FC } from "react";
import JobType, { getNorwegianJobType } from "../types/enums/JobType";
import Level, { getNorwegianLevelName } from "../types/enums/Level";
import {
  BachelorStudyProgram,
  getNorwegianBachelorStudyProgram,
  getNorwegianMasterStudyProgram,
  MasterStudyProgram,
} from "../types/enums/StudyProgram";
import mapEnum from "../utils/mapEnum";

interface ICompanyFilterProps {
  jobTypes: JobType[];
  setJobTypes: (jobTypes: JobType[]) => void;
  levels: Level[];
  setLevels: (levels: Level[]) => void;
  masters: MasterStudyProgram[];
  setMasters: (masters: MasterStudyProgram[]) => void;
  bachelors: BachelorStudyProgram[];
  setBachelors: (bachelors: BachelorStudyProgram[]) => void;
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
    "&:hover, &:focus": {
      backgroundColor: "red",
    },
  },
}));

const CompanyFilter: FC<ICompanyFilterProps> = ({
  jobTypes,
  setJobTypes,
  levels,
  setLevels,
  masters,
  setMasters,
  bachelors,
  setBachelors,
}) => {
  const classes = useStyles();

  // TODO - Make these general somehow. Probably some sneaky generics
  const handleJobTypeChange = (jobType: JobType) => {
    if (jobTypes.includes(jobType)) {
      setJobTypes(jobTypes.filter((jt) => jt !== jobType));
    } else {
      const newJobTypes = [...jobTypes, jobType];
      setJobTypes(newJobTypes);
    }
  };

  const handleLevelChange = (level: Level) => {
    if (levels.includes(level)) {
      setLevels(levels.filter((l) => l !== level));
    } else {
      const newLevels = [...levels, level];
      setLevels(newLevels);
    }
  };

  const handleMastersChange = (master: MasterStudyProgram) => {
    if (masters.includes(master)) {
      setMasters(masters.filter((l) => l !== master));
    } else {
      const newMasters = [...masters, master];
      setMasters(newMasters);
    }
  };

  const handleBachelorsChange = (bachelor: BachelorStudyProgram) => {
    if (bachelors.includes(bachelor)) {
      setBachelors(bachelors.filter((l) => l !== bachelor));
    } else {
      const newBachelors = [...bachelors, bachelor];
      setBachelors(newBachelors);
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
            key={key}
          />
        ))}
      </div>
      <div>
        {mapEnum(JobType, (key: JobType) => (
          <Chip
            label={getNorwegianJobType(key)}
            className={jobTypes.includes(key) ? classes.active : ""}
            onClick={() => handleJobTypeChange(key)}
            key={key}
          />
        ))}
      </div>
      <div>
        {mapEnum(MasterStudyProgram, (key: MasterStudyProgram) => (
          <Chip
            label={getNorwegianMasterStudyProgram(key)}
            className={masters.includes(key) ? classes.active : ""}
            onClick={() => handleMastersChange(key)}
            key={key}
          />
        ))}
        {mapEnum(BachelorStudyProgram, (key: BachelorStudyProgram) => (
          <Chip
            label={getNorwegianBachelorStudyProgram(key)}
            className={bachelors.includes(key) ? classes.active : ""}
            onClick={() => handleBachelorsChange(key)}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyFilter;
