import "./App.css";
import React, { useState, useEffect } from 'react';
import Quiz from "./Quiz.js";
import Welcome from "./Welcome.js";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Welcome />
      <div className="section">
        <Quiz />
      </div>
    </div>
  );
}

export default App;
