
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8000;


connectDb();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(cors({
  origin: ['https://deeptruth-ai.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true 
}));

app.use("/api/users", require("./routes/userRoutes"));

app.get("/api", (req, res) => {
  res.send("Welcome to the application backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
