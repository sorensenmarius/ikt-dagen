import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CompanyList from "./components/CompanyList";
import AboutYou from "./views/AboutYou";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/companies" component={CompanyList} />
        <Route path="/about-you" component={AboutYou} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
