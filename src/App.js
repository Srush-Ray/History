import React from "react";
// import logo from './logo.svg';
// import './App.css';
//import Objective from "./Objectives/Objective";
import History from "./History/History.js";
import {
  Switch,
  Route,
  withRouter,
  Link,
  NavLink,
  BrowserRouter,
  Router,
} from "react-router-dom";
import RegisterForm from "./RegisterForm/RegisterForm.js";
function App() {
  return (
    <div className="App">
      {/*
      <Objective />
       <History />
    */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={History} exact />

          <Route path="/History/" component={History} exact />
          <Route path="/register" component={RegisterForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
