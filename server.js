// DEFINING REQUIRED PACKAGES
const express = require("express");
const path = require("path");

// CREATING INSTANCE OF EXPRESS
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PORT
const PORT = process.env.PORT || 3001;

// LISTENING ON PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// POST REQUEST
app.post("/api/sendMail", (req, res) => {
  console.log(req.body);
  res.end();
});

// BUILD FOLDER STATIC
app.use(express.static("client/build"));

// ROUTE TO SERVER
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
