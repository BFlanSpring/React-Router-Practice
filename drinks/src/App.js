import React from "react";
import Nav from "./Nav";
import AppRoutes from "./Routes";
import { BrowserRouter } from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <div className="AppContainer">
      <BrowserRouter>
        <Nav />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
