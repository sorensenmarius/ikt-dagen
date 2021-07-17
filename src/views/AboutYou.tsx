import {
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import JobType, { getNorwegianJobType } from "../types/enums/JobType";
import Level, { getNorwegianLevelName } from "../types/enums/Level";
import {
  BachelorStudyProgram,
  getNorwegianBachelorStudyProgram,
  getNorwegianMasterStudyProgram,
  MasterStudyProgram,
} from "../types/enums/StudyProgram";
import mapEnum from "../utils/mapEnum";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "blue",
  },
}));

const AboutYou = () => {
  const [level, setLevel] = useState(0);
  const [jobTypes, setJobTypes] = useState<number[]>([]);
  const [studyProgram, setStudyProgram] = useState("bachelor");
  const [bachelor, setBachelor] = useState(0);
  const [master, setMaster] = useState(0);

  const classes = useStyles();

  const handleJobTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const jobType = parseInt(e.target.value);

    const idx = jobTypes.indexOf(jobType);
    if (idx >= 0) {
      let tempJT = [...jobTypes];
      tempJT.splice(idx, 1);
      setJobTypes(tempJT);
    } else {
      setJobTypes([...jobTypes, jobType]);
    }
  };

  const history = useHistory();
  const rerouteToCompanies = () => {
    history.push("/companies", {
      level,
      jobTypes,
      studyProgram,
      bachelor,
      master,
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4">Hvilket trinn går du i?</Typography>
      <RadioGroup
        value={level}
        onChange={(e) => setLevel(parseInt(e.target.value))}
        className={classes.flexRow}
      >
        {mapEnum(Level, (l: Level) => (
          <FormControlLabel
            value={l}
            control={<Radio />}
            label={getNorwegianLevelName(l)}
          />
        ))}
      </RadioGroup>
      <Typography variant="h4">
        Hvilke typer jobb er du interessert i?
      </Typography>
      <div className={classes.flexRow}>
        {mapEnum(JobType, (jt: JobType) => (
          <FormControlLabel
            control={
              <Checkbox
                value={jt}
                checked={jobTypes.includes(jt)}
                onChange={handleJobTypeChange}
              />
            }
            label={getNorwegianJobType(jt)}
          />
        ))}
      </div>
      <Typography variant="h4">Hvilket studie går du på?</Typography>
      <div>
        <Button
          variant="contained"
          className={studyProgram === "bachelor" ? classes.activeButton : ""}
          onClick={() => setStudyProgram("bachelor")}
        >
          Bachelor
        </Button>
        <Button
          variant="contained"
          className={studyProgram === "master" ? classes.activeButton : ""}
          onClick={() => setStudyProgram("master")}
        >
          Master
        </Button>
      </div>
      {studyProgram === "bachelor" ? (
        <RadioGroup
          value={bachelor}
          onChange={(e) => setBachelor(parseInt(e.target.value))}
          className={classes.flexRow}
        >
          {mapEnum(BachelorStudyProgram, (l: BachelorStudyProgram) => (
            <FormControlLabel
              value={l}
              control={<Radio />}
              label={getNorwegianBachelorStudyProgram(l)}
            />
          ))}
        </RadioGroup>
      ) : (
        <RadioGroup
          value={master}
          onChange={(e) => setMaster(parseInt(e.target.value))}
          className={classes.flexRow}
        >
          {mapEnum(MasterStudyProgram, (l: MasterStudyProgram) => (
            <FormControlLabel
              value={l}
              control={<Radio />}
              label={getNorwegianMasterStudyProgram(l)}
            />
          ))}
        </RadioGroup>
      )}
      <Button variant="contained" onClick={rerouteToCompanies}>
        Se bedrifter
      </Button>
    </div>
  );
};

export default AboutYou;
