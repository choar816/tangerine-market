import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Splash from "./pages/SplashPage";
import Test from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Splash} />
      <Route path="/test" component={Test} />
    </BrowserRouter>
    // <Splash/>
  );
}

export default App;
