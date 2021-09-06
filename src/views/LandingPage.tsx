import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { BusinessCenterRounded, SearchRounded } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px 40px",
    gap: "60px",
  },
  cardWrappers: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  cards: {
    boxShadow: "0px 4px 20px rgba(199, 199, 199, 0.5)",
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "0px 4px 20px rgba(150, 150, 150, 1)",
    },
  },
  icons: {
    fontSize: "60px",
    color: "#C95144",
    marginBottom: "15px",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <Button
        color="secondary"
        href="https://docs.google.com/forms/d/e/1FAIpQLSf-4QWhRbpErW7XoeWidn4yrlqH4WVj09PLsjO8TAxPyogW_w/viewform"
      >
        <Typography variant="h5">Smittesporing</Typography>
      </Button>
      <div className={classes.cardWrappers}>
        <Typography variant="h5">Finn bedrifter for deg</Typography>
        <Card
          className={classes.cards}
          onClick={() => history.push("/about-you")}
        >
          <CardContent>
            <SearchRounded className={classes.icons} />
            <Typography variant="h6">
              Her finner du bedrifter som passer deg
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.cardWrappers}>
        <Typography variant="h5">Se alle bedrifter</Typography>
        <Card
          className={classes.cards}
          onClick={() => history.push("/companies")}
        >
          <CardContent>
            <BusinessCenterRounded className={classes.icons} />
            <Typography variant="h6">
              Her finner du alle bedrifter som er med på IKT-dagen
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default LandingPage;
