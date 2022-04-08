import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Swtitch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
      </Router>
    );
  }
}

export default App;
