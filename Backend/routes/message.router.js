import express from "express";
import {
  getMessages,
  createMessage,
} from "../controller/message.controller.js"; // Import the controller

const router = express.Router();

// Route to get all messages
router.get("/messages", getMessages);

// Route to create a new message
router.post("/messages", createMessage);

export default router;
