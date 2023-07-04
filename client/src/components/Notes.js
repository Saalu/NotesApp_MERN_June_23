import React from "react";
import Create from "./notes/Create";
import Edit from "./notes/Edit";
import Nav from "./notes/Nav";
import Home from "./notes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Notes({ setIsLogin }) {
  return (
    <Router>
      <div className="notes-page">
        <Nav setIsLogin={setIsLogin} />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default Notes;
