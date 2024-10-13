const express = require("express");
const connectDB = require("./config/db");
const questionRoutes = require("./routes/questionRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();
app.use(cors());
// Use routes
app.use("/api", questionRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
