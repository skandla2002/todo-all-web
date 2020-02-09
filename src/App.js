import React, {Component} from "react";
// import Header from './components/Header';
// import List from './components/List';
// import Login from "./components/Login";
import CounterContainer from "./container/CounterContainer";
// import Counter from './components/Counter';
import "./App.css";

class App extends Component {
  render(){
      return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
