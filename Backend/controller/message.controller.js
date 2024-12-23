import Message from "../model/messsage.model.js"; // Import the Message model

// Controller to handle GET requests (fetch all messages)
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find(); // Fetch all messages
    res.status(200).json(messages); // Send the messages as a response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching messages" });
  }
};

// Controller to handle POST requests (create a new message)
export const createMessage = async (req, res) => {
  const { Name, Email, Comment } = req.body; // Extract data from the request body

  // Simple validation
  if (!Name || !Email || !Comment) {
    return res.status(400).json({
      message: "Please provide all required fields (Name, Email, Comment)",
    });
  }

  try {
    // Create a new message
    const newMessage = new Message({
      Name,
      Email,
      Comment,
    });

    // Save the message to the database
    await newMessage.save();

    // Respond with the saved message
    res.status(201).json(newMessage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating message" });
  }
};
