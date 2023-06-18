const Notes = require("../models/noteModel");

const noteCtrl = {
  getNotes: (req, res) => {
    res.json(req.user.id);
    // console.log(req.body);
  },
  postNote: async (req, res) => {
    try {
      const { title, content, date } = req.body;
      const newNote = new Notes({
        title,
        content,
        date,
        user_id: req.user.id,
        name: req.user.name,
      });
      await newNote.save();
      res.json(newNote);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = noteCtrl;
