import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import TopMenu from "./components/TopMenu";
import defaultTheme from "./theme/defaultTheme";
import AboutYou from "./views/AboutYou";
import Companies from "./views/Companies";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TopMenu />
        <div
          style={{
            paddingTop: "100px",
            minHeight: "calc(100vh - 100px)",
            backgroundColor: "#E5E5E5",
          }}
        >
          <div style={{ margin: "auto", maxWidth: "800px" }}>
            <Switch>
              <Route path="/companies" component={Companies} />
              <Route path="/about-you" component={AboutYou} />
              <Route path="/" component={LandingPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
