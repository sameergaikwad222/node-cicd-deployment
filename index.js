const express = require("express");
const app = express();
const port = 3000;

app.post("/api/data", (req, res) => {
  // Handle the incoming data from the POST request
  console.log("Received POST request to /api/data");
  try {
    const data = req?.body || {};
    console.log("Received data:", data);
    res.json({ message: "Data received successfully", data });
  } catch (error) {
    console.error("Error occurred while processing data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    status: "success",
    timestamp: new Date().toISOString(),
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});
