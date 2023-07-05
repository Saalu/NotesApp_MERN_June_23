import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Edit({ match }) {
  const [note, setNote] = useState({
    title: "",
    content: " ",
    date: "",
    id: "",
  });
  const history = useNavigate();
  const { itemId } = useParams();

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem("tokenStore");
      if (itemId) {
        const res = await axios.get(`/api/notes/${itemId}`, {
          headers: { Authorization: token },
        });
        setNote({
          title: res.data.title,
          content: res.data.content,
          datte: new Date(res.data.date).toLocaleDateString(),
          id: res.data._id,
        });
      }
    };

    getNote();
  }, [itemId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };
  const editNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, content, date, id } = note;
        const newNote = {
          title,
          content,
          date,
        };
        await axios.put(`/api/notes/${id}`, newNote, {
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
      <h2>Edit Note</h2>
      <form onSubmit={editNote}>
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

export default Edit;
