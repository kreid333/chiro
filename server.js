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

// API ROUTES
const apiRoutes = require("./controller/apiController");
app.use(apiRoutes);

// BUILD FOLDER STATIC
app.use(express.static("libertyccc/public"));