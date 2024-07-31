import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Component/Home";
import Update from "./Component/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
