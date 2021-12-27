import React from "react";
import "./styles/App.css";
import Home from "./views/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutUs from "./views/AboutUsPage";
import Donate from "./views/DonatePage";
import Adopt from "./views/AdoptPage";
import ContactUs from "./views/ContactUsPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/contactus">
            <Donate />
          </Route>
        <Route path="/adopt">
            <Donate />
          </Route>
        <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
