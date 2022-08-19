import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [seconds, setSeconds] = useState(0);

  const tick = () => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  };

  setInterval(() => tick(), 1000);

  return (
    <div className="App">
      <header className="App-header">
        <div>Seconds: {seconds} </div>
      </header>
    </div>
  );
};

export default App;
