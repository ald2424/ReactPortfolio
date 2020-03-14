import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/portfolio";
import NavTabs from "./components/NavTabs";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <NavTabs>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Portfolio} />
      </NavTabs>
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio}/>
    </div>
  </Router>
  );
}

export default App;
