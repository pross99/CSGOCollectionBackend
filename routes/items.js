// routes/Runss.js
const express = require("express");
const Item = require("../models/Item");
const router = express.Router();


// GET all Items
router.get("/", async (request, response) => {
  const collection = await Item.find();
  response.json(collection);
});

router.get("/search", async (request, response) => {
    try{
        const {q} = request.query; 
        

        if(!q) {
            return response.status(400).json({message: 'Please search for a skin name'});
        }

        const cleanQuery = q.replace(/[^\w\s]/g, "").trim();

        const words = cleanQuery.split(/\s+/).filter(Boolean);
        const regex = new RegExp(words.join(".*"), "i");

        const items = await Item.find({
          name: {$regex: regex},
        })

        response.json(items);

    } catch (err) {
        response.status(500).json({error: err.message})
    }
})

router.get("/:id", async (request, response) => {


    try {

   
    const {id} = request.params;


    const item = await Item.findOne({ id });
    
    // Check if item exists
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
