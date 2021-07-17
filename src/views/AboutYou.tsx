import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import JobType, { getNorwegianJobType } from "../types/enums/JobType";
import Level, { getNorwegianLevelName } from "../types/enums/Level";
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
}));

const AboutYou = () => {
  const [level, setLevel] = useState(0);
  const [jobTypes, setJobTypes] = useState<number[]>([]);

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
    </div>
  );
};

export default AboutYou;
