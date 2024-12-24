import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Messagebox() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Added email state
  const [comment, setComment] = useState(""); // Changed 'message' to 'comment'

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value); // Email change handler
  const handleCommentChange = (e) => setComment(e.target.value); // Changed 'message' to 'comment'

  const handleSubmit = async () => {
    if (!name || !email || !comment) {
      // Validate 'comment' instead of 'message'
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Send a POST request to the backend API with matching field names
      const response = await axios.post(
        "http://localhost:3001/api/messages",
        {
          Name: name, // Capitalize the field names to match backend requirements
          Email: email, // Capitalize the field names to match backend requirements
          Comment: comment, // Capitalize the field names to match backend requirements
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If the message was sent successfully
      if (response.status === 200) {
        console.log("Message sent successfully:", response.data);
        alert("Your message has been sent successfully!");
      }

      // Reset form fields
      setName("");
      setEmail("");
      setComment(""); // Reset 'comment'

      // Redirect to the home page
      navigate("/list");
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Message Box
        </h1>

        {/* Name Input */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              display: "block",
              color: "#333",
            }}
          >
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            name="Name" // Set the input name to "Name"
            placeholder="Your name"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
              marginBottom: "20px",
            }}
          />
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              display: "block",
              color: "#333",
            }}
          >
            Enter your email
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="Email" // Set the input name to "Email"
            placeholder="Your email"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
              marginBottom: "20px",
            }}
          />
        </div>

        {/* Comment Input (Message) */}
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              display: "block",
              color: "#333",
            }}
          >
            Write your message here
          </label>
          <textarea
            value={comment} // Changed 'message' to 'comment'
            onChange={handleCommentChange} // Changed to handleCommentChange
            name="Comment" // Set the input name to "Comment"
            placeholder="Your message"
            style={{
              width: "100%",
              height: "200px",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
              resize: "none",
            }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: "12px 20px",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%",
              transition: "background-color 0.3s ease",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messagebox;
