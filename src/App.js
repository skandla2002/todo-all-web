import React, {Component} from "react";
// import Header from './components/Header';
// import List from './components/List';
// import Login from "./components/Login";
import CounterContainer from "./container/CounterContainer";
import Login from './components/Login';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import Counter from './components/Counter';
import "./App.css";

class App extends Component {
  render(){
      return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/counter" component={CounterContainer}></Route>
            {/* <Link to="/">{CounterContainer}</Link>
            <Link to="/Login">{Login}</Link>         */}
        </div>
      </Router>
    );
  }
}

export default App;
