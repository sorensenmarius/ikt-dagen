import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutYou from "./views/AboutYou";
import Companies from "./views/Companies";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/companies" component={Companies} />
        <Route path="/about-you" component={AboutYou} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
