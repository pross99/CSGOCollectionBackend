// routes/Runss.js
const express = require("express");
const Collection = require("../models/Collection");
const router = express.Router();
const { ObjectId } = require('mongodb');

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


router.get("/:id", async(request,response) => {


 try {

   
    const {id} = request.params;


    if (!ObjectId.isValid(id)) {
      return response.status(400).json({error: "Invalid ID!"})
    }
    
   const item = await Collection.findOne({_id: new ObjectId(id)});

     if (!item) {
      return response.status(404).json({ error: 'Item not found' });
    }
    
    // Return the item
    response.status(200).json(item);

     }
     catch (err) {
    console.error('Error fetching item:', err);
    response.status(500).json({ error: 'Internal server error' });
  }
})

router.delete("/delete/:id", async(request,response) => {
  

  try {

   
    const {id} = request.params;


    if (!ObjectId.isValid(id)) {
      return response.status(400).json({error: "Invalid ID!"})
    }
    
   const item = await Collection.findByIdAndDelete(new ObjectId(id), request.body);

     if (!item) {
      return response.status(404).json({ error: 'Item not found' });
    }
    
    // Return the item
    response.status(200).json(item);

     }
     catch (err) {
    console.error('Error fetching item:', err);
    response.status(500).json({ error: 'Internal server error' });
  }
})


router.put("/:id", async(request, response) => {

  try {

    const {id} = request.params;

     if (!ObjectId.isValid(id)) {
      return response.status(400).json({error: "Invalid ID!"})
    }
    
   const item = await Collection.findByIdAndUpdate(new ObjectId(id));

     if (!item) {
      return response.status(404).json({ error: 'Item not found' });
    }
    
    // Return the item
    response.status(200).json(item);

     }
     catch (err) {
    console.error('Error fetching item:', err);
    response.status(500).json({ error: 'Internal server error' });
  }
  
})

module.exports = router;
