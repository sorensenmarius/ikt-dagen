import { createTheme } from "@material-ui/core";

const defaultTheme = createTheme({
  typography: {
    fontFamily: "Lato, Roboto, Arial",
  },
  palette: {
    primary: {
      light: "#D5726A",
      main: "#C95144",
    },
    secondary: {
      light: "#6B89D3",
      main: "#283864",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        color: "#fff",
        backgroundColor: "#6B89D3",
        boxShadow: "0px 4px 10px rgba(162, 162, 162, 0.75)",
        borderRadius: "15px",
        fontSize: "16px",
        fontWeight: 300,
        "&:hover": {
          backgroundColor: "#283864 !important",
        },
        "& .MuiButton-label:hover": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
    },
  },
});

export default defaultTheme;
