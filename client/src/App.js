import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Feed from "./components/feed/feed";

function App() {
  return (
      <Router>
          <main>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/signup" component={Signup}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/feed" component={Feed}/>
              </Switch>
          </main>
          <Footer/>
      </Router>
  );
}

export default App;
