import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="note-wrapper">
      <div className="card">
        <h4 className="title">Note Title</h4>
        <div className="text-wrapper">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ipsum
            quidem a fuga quae cum.
          </p>
        </div>
        <p className="date">Note Date</p>
        <div className="card-footer">
          User Name
          <Link to="/">Edit</Link>
        </div>
        <button className="close">X</button>
      </div>
    </div>
  );
}

export default Home;
