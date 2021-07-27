import React from 'react';
import logo from '../static/logo.svg';
import '../assets/App.css';
import {useSelector} from "react-redux";
import {getAll} from "../store/reducers/root.reducers";

function App() {
  const all = useSelector(getAll)
  console.log(all)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.ts*x</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {all.title}
          <br/>
            with Redux + TypeScript + Nest + Mongo + Docker
          <br/>
          {all.contact}
        </p>
      </header>
    </div>
  );
}

export default App;
