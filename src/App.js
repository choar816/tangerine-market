import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";

import "./App.css";
import Splash from "./pages/SplashPage";
import Test from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Splash/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </BrowserRouter>
    // <Splash/>
  );
}

export default App;
