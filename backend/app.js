
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.get("/api", (req, res) => {
  res.send("Welcome to the application backend");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
