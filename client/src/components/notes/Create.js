import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Create() {
  const [note, setNote] = useState({
    title: "",
    content: " ",
    date: "",
  });
  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };
  const createNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, content, date } = note;
        const newNote = {
          title,
          content,
          date,
        };
        await axios.post("api/notes", newNote, {
          headers: { Authorization: token },
        });

        return history.push("/");
      }
    } catch (err) {
      window.location.href = "/";
    }
  };

  return (
    <div className="create-note">
      <h2>Create Note</h2>
      <form onSubmit={createNote}>
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title   "
            value={note.title}
            required
            placeholder="Type Title here"
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="content"
            id="content"
            value={note.content}
            required
            rows="10"
            placeholder="Type Content here"
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label htmlFor="date">Date:{note.date}</label>
          <input
            type="text"
            name="date"
            id="date   "
            value={note.date}
            placeholder="Type Date here"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Create;
