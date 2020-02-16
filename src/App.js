import React, {Component} from "react";
// import Header from './components/Header';
// import List from './components/List';
// import Login from "./components/Login";
import CounterContainer from "./container/CounterContainer";
import Login from './components/Login';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
// import Counter from './components/Counter';
import "./App.css";
import Profiles from "./components/Profiles";
import HistorySample from './lib/HistorySample'

class App extends Component {
  render(){
      return (
      <Router>
        <div className="App">
            <ul>
              <li>
                <Link to="/profiles">프로필</Link>
              </li>
            </ul>
              
            {/* <Route exact path="/" component={Login}></Route> */}
            <Route path={["/About", "/info"]} component={About}></Route>
            {/* <Route path="/profile/:username" component={Profile}></Route> */}
            <Route path="/Home" component={Home}></Route>
            <Route exact path="/counter" component={CounterContainer}></Route>
            <Route path="/profiles" component={Profiles}></Route>
            <Route path="/history" component={HistorySample}></Route>
            {/* <Link to="/">{CounterContainer}</Link>
            <Link to="/Login">{Login}</Link>         */}
        </div>
      </Router>
    );
  }
}

export default App;
