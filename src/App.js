import React, { Fragment } from "react";
// import Header from './components/Header';
// import List from './components/List';
import Login from "./components/Login";
import "./App.css";
// import Counter from "./components/Counter";
import CounterContainer from "./container/CounterContainer";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <List /> */}
      {/* <Header /> */}
      {/* <Counter /> */}
      <CounterContainer />
    </div>
  );
}

export default App;
