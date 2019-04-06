import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./Components/NavTabs.jsx";
import Footer from "./Components/Footer.jsx";
import Wrapper from "./Components/Wrapper";
import Search from "./pages/Search.jsx";
import Saved from "./pages/Saved.jsx";
import NoMatch from "./pages/NoMatch.jsx";


class App extends Component {

  render() {
    return (
      <Router>
          <NavTabs />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
        <main>
          
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
