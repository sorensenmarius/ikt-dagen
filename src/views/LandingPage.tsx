import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    maxWidth: "400px",
    margin: "50px 0",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <img
        src="/images/IKTDagen.jpg"
        alt="IKT Dagen logo"
        className={classes.logo}
      />
      <Button variant="contained" onClick={() => history.push("/about-you")}>
        Vis meg bedrifter som passer for meg
      </Button>
      <Button variant="text" onClick={() => history.push("/companies")}>
        Vis meg alle bedrifter
      </Button>
    </div>
  );
};
export default LandingPage;
