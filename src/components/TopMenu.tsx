import { AppBar, makeStyles } from "@material-ui/core";
import { FC } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#fff",
    height: "75px",
  },
  logo: {
    height: "50px",
    margin: "auto",
  },
}));

const TopMenu: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar className={classes.appBar}>
      <img
        src="/images/ikt-logo.png"
        alt="IKT Dagen logo"
        className={classes.logo}
        onClick={() => history.push("/")}
      />
    </AppBar>
  );
};

export default TopMenu;
