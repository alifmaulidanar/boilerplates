const express = require("express");
const cors = require("cors");

// Server
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.use("/");
app.get("/", (req, res) => {
  res.send("Backend is working...");
});

// Server Connection
app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
