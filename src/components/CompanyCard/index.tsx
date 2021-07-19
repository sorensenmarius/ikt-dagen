import {
  Typography,
  Avatar,
  Paper,
  Chip,
  Button,
  Link,
} from "@material-ui/core";
import { Explore } from "@material-ui/icons";
import { FC } from "react";
import Company from "../../types/Company";
import { getNorwegianJobType } from "../../types/enums/JobType";
import { getNorwegianLevelName } from "../../types/enums/Level";
import {
  getNorwegianBachelorStudyProgram,
  getNorwegianMasterStudyProgram,
} from "../../types/enums/StudyProgram";
import useStyles from "./style";

interface ICompanyCardProps {
  company: Company;
}

const CompanyCard: FC<ICompanyCardProps> = ({ company }) => {
  const classes = useStyles();

  return (
    <Paper>
      <Avatar src={company.logo} className={classes.avatar} />
      <Typography variant="h3">{company.name}</Typography>
      <Button
        variant="text"
        target="_blank"
        href={`https://www.google.com/maps/search/?api=1&query=${company.address}`}
      >
        <Explore />
        <Typography variant="subtitle1">{company.address}</Typography>
      </Button>
      <Link target="_blank" href={company.website} underline="always">
        {company.website}
      </Link>
      <Typography variant="subtitle1">{company.email}</Typography>
      {company.jobTypes.map((jobType) => (
        <Chip label={getNorwegianJobType(jobType)} key={jobType} />
      ))}
      {company.levels.map((level) => (
        <Chip label={getNorwegianLevelName(level) + " klasse"} key={level} />
      ))}
      {company.masterStudyPrograms.map((p) => (
        <Chip label={getNorwegianMasterStudyProgram(p)} key={p} />
      ))}
      {company.bachelorStudyPrograms.map((p) => (
        <Chip label={getNorwegianBachelorStudyProgram(p)} key={p} />
      ))}
    </Paper>
  );
};

export default CompanyCard;
