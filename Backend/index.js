import express from "express";
import mongoose from "mongoose";
import messageRoutes from "./routes/message.router.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// MongoDB URI (Replace with your actual MongoDB URI)
const mongoURI = "mongodb://localhost:27017/mydatabase"; // Example URI

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", messageRoutes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
