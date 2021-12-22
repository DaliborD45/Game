import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
