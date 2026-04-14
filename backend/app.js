import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import express from "express";
const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("API running...");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
