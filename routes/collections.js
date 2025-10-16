// routes/Runss.js
const express = require("express");
const Collection = require("../models/Collection");
const router = express.Router();

// GET all collections
router.get("/", async (request, response) => {
  const collection = await Collection.find();
  response.json(collection);
});

router.post("/", async (request, response) => {
  const newCollection = new Collection(request.body);
  const saved = await newCollection.save();
  response.json(saved);
});



module.exports = router;
