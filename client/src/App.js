import './App.css';
import React from "react";
import Home from "./home/home";
import Footer from "./footer/footer";
import Signup from "./signup/signup";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
          <main>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/signup" component={Signup}/>
              </Switch>
          </main>
          <Footer/>
      </Router>
  );
}

export default App;
