import React, {Component} from "react";
// import Header from './components/Header';
// import List from './components/List';
// import Login from "./components/Login";
<<<<<<< HEAD
import Counter from "./components/Counter";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Login /> */}
      {/* <List /> */}
      {/* <Header /> */}
      {/* <Counter /> */}
    </div>
  );
=======
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
>>>>>>> 3462d01b54e932b4eb8e8efcfb31fa70b3cbdaf8
}

export default App;
