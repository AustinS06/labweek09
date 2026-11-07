import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [info] = useState({
    title: "Welcome to Fullstack Development - I",
    subtitle: "React JS Programming Week09 Lab exercise",
    studentId: "101553697",
    name: "Austin Samms",
    college: "George Brown College, Toronto"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{info.title}</h1>
        <h2>{info.subtitle}</h2>
        <p>{info.studentId}</p>
        <p>{info.name}</p>
        <p>{info.college}</p>
      </header>
    </div>
  );
}

export default App;
