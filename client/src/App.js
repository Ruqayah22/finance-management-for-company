import React from "react";
import Home from "./pages/Home";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
