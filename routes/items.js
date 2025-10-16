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

        const items = await Item.find({
            name: {$regex: q, $options: 'i'}
        });

        response.json(items);

    } catch (err) {
        response.json(500).json({error: err.message})
    }
})

module.exports = router;
