import React, { Component } from "react";
import { BrowserRouter as Router, Swtitch, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Main />
      </Router>
    );
  }
}

export default App;
