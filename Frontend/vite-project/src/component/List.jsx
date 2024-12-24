import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [messages, setMessages] = useState([]); // State to hold all messages
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const messagesPerPage = 10; // Number of messages per page

  // Function to fetch messages from the API
  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/messages");
      const data = response.data;

      // Sort messages in reverse chronological order (newest first)
      const sortedMessages = data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      setMessages(sortedMessages); // Set sorted messages to state
      setTotalPages(Math.ceil(sortedMessages.length / messagesPerPage)); // Calculate total pages based on data length
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // UseEffect to fetch messages on component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  // Get the messages to display on the current page
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Messages</h1>

      {/* Display the messages */}
      <div>
        {currentMessages.length === 0 ? (
          <p>No messages found</p>
        ) : (
          currentMessages.map((message, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>{message?.Name}</h3>
              <p>{message?.Comment}</p>
              <small>{new Date(message.timestamp).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>

      {/* Pagination controls */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default List;
