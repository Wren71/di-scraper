import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./Home/Home";
import About from "./About/About";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
  }

  onChangeTab = (event) => {
    console.log("TAB", event.target.id);
    this.setState({ activeTab: event.target.id });
    this.props.history.push("/" + `${event.target.name}`);
  };

  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg"
          style={{ backgroundColor: "#8A31FF", paddingBottom: 0 }}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" style={{ marginRight: "3em" }}>
                <a
                  class="nav-link"
                  href="#"
                  style={{
                    color: "white",
                    fontFamily: "Atten Round New",
                    padding: "0.5em 0 0 0",
                    fontSize: "25px",
                  }}
                ></a>
              </li>
              <li class="nav-item" style={{ marginRight: "3em" }}>
                <a
                  id="1"
                  name="Home"
                  class="nav-link"
                  style={{
                    color: "white",
                    fontFamily: "Atten Round New",
                    padding: "0.5em 0 0 0",
                    fontSize: "25px",
                    borderBottom:
                      this.state.activeTab == 1 ? "4px solid #00BAFF" : null,
                      cursor:"pointer"
                  }}
                  onClick={this.onChangeTab}
                >
                  Search <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item" style={{ marginRight: "3em" }}>
                <a
                  id="2"
                  name="Pinned"
                  class="nav-link"
                  style={{
                    color: "white",
                    fontFamily: "Atten Round New",
                    borderBottom:
                      this.state.activeTab == 2 ? "4px solid #00BAFF" : null,
                    padding: "0.5em 0 0 0",
                    fontSize: "25px",
                    cursor:"pointer"
                  }}
                  onClick={this.onChangeTab}
                >
                  Pinned
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <a
                id="3"
                name="About"
                class="nav-link"
                style={{
                  color: "white",
                  fontFamily: "Atten Round New",
                  padding: "0.5em 0 0 0",
                  fontSize: "25px",
                  borderBottom:
                    this.state.activeTab == 3 ? "4px solid #00BAFF" : null,
                  cursor:"pointer"
                }}
                onClick={this.onChangeTab}
              >
                About
              </a>
            </form>
          </div>
        </nav>

        <Router>
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default  withRouter(App);
