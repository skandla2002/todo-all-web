import React, {Component} from "react";
// import Header from './components/Header';
// import List from './components/List';
// import Login from "./components/Login";
import CounterContainer from "./container/CounterContainer";
import Login from './components/Login';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
// import Counter from './components/Counter';
import "./App.css";

class App extends Component {
  render(){
      return (
      <Router>
        <div className="App">
            <Route exact="true" path="/" component={Login}></Route>
            <Route path={["/About", "/info"]} component={About}></Route>
            <Route path="/Home" component={Home}></Route>
            <Route exact="true" path="/counter" component={CounterContainer}></Route>
            {/* <Link to="/">{CounterContainer}</Link>
            <Link to="/Login">{Login}</Link>         */}
        </div>
      </Router>
    );
  }
}

export default App;
