require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const noteRouter = require("./routes/noteRouter");

const app = express();
app.use(express.json());

// Routes
app.use("/users", userRouter);
app.use("/api/notes", noteRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const URI = process.env.MONGODB_URI;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected..."))
  .catch((error) => {
    console.error("Failed to connect to the MongoDB database:", error);
  });
