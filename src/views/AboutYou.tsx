import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import JobType, { getNorwegianJobType } from "../types/enums/JobType";
import {
  BachelorStudyProgram,
  getNorwegianBachelorStudyProgram,
  getNorwegianMasterStudyProgram,
  MasterStudyProgram,
} from "../types/enums/StudyProgram";
import mapEnum from "../utils/mapEnum";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
    gap: "14px",
  },
  activeButton: {
    backgroundColor: palette.secondary.main,
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "5px",
  },
  checkboxWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    "& .MuiCheckbox-root": {
      padding: "0 9px",
    },
  },
  bachelorMasterButtonWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  flexGrow: {
    flexGrow: 1,
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
      <div>
        <Typography variant="h6">Hvilket trinn går du i?</Typography>
        <div className={classes.buttonWrapper}>
          {[1, 2, 3, 4, 5].map((l) => (
            <Button
              onClick={() => setLevel(l)}
              key={l}
              className={`${classes.flexGrow} ${
                level === l ? classes.activeButton : ""
              }`}
            >
              {l}
            </Button>
          ))}
        </div>
      </div>
      <Divider />
      <div>
        <Typography variant="h6">Jobb interesser?</Typography>
        <div className={classes.checkboxWrapper}>
          {mapEnum(JobType, (jt: JobType) => (
            <FormControlLabel
              control={
                <Checkbox
                  value={jt}
                  checked={jobTypes.includes(jt)}
                  onChange={handleJobTypeChange}
                />
              }
              label={
                <Typography variant="body1">
                  {getNorwegianJobType(jt)}
                </Typography>
              }
            />
          ))}
        </div>
      </div>
      <Divider />
      <Typography variant="h6">Hvilket studie går du på?</Typography>
      <div className={classes.bachelorMasterButtonWrapper}>
        <Button
          variant="contained"
          className={`${classes.flexGrow} ${
            studyProgram === "bachelor" ? classes.activeButton : ""
          }`}
          onClick={() => setStudyProgram("bachelor")}
        >
          Bachelor
        </Button>
        <Button
          variant="contained"
          className={`${classes.flexGrow} ${
            studyProgram === "master" ? classes.activeButton : ""
          }`}
          onClick={() => setStudyProgram("master")}
        >
          Master
        </Button>
      </div>
      {studyProgram === "bachelor" ? (
        <RadioGroup
          value={bachelor}
          onChange={(e) => setBachelor(parseInt(e.target.value))}
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
      <Button color="primary" onClick={rerouteToCompanies}>
        Finn bedrifter
      </Button>
    </div>
  );
};

export default AboutYou;
