import { AppBar, makeStyles, Typography } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#fff",
    height: "75px",
  },
  logo: {
    height: "50px",
    margin: "auto",
  },
  legendWrapper: {
    display: "flex",
    color: "#000",
    justifyContent: "center",
    gap: "16px",
  },
}));

const TopMenu: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <AppBar className={classes.appBar}>
      <img
        src="/images/ikt-logo.png"
        alt="IKT Dagen logo"
        className={classes.logo}
        onClick={() => history.push("/")}
      />
      {location.pathname === "/companies" && (
        <div className={classes.legendWrapper}>
          <div style={{ display: "flex" }}>
            <FiberManualRecord style={{ color: "#6696CF" }} />
            <Typography variant="body1">Bachelor</Typography>
          </div>
          <div style={{ display: "flex" }}>
            <FiberManualRecord style={{ color: "#66CF83" }} />
            <Typography variant="body1">Master</Typography>
          </div>
        </div>
      )}
    </AppBar>
  );
};

export default TopMenu;
