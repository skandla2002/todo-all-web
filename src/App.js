import React, { Fragment } from "react";
// import Header from './components/Header';
// import List from './components/List';
import Login from "./components/Login";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <List /> */}
      {/* <Header /> */}
      <Counter />
    </div>
  );
}

export default App;
