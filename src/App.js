
import './App.css';
import React from 'react';
import Site from "./containers/Site/Site";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}

export default App;
