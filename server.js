// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("database connected"))
.catch(err => console.error(err));

// Example route
app.get("/", (request, response) => {
  response.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const collectionRoute = require("./routes/collections");
app.use("/api/collection", collectionRoute);

const itemRoute = require ("./routes/items")
app.use("/api/item", itemRoute);

