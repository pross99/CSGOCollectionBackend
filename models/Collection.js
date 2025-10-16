const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema({
    itemId: {type: String, required: true },
    userName: {type: String, required: true}
},{collection: 'user'})

module.exports = mongoose.model("Collection", CollectionSchema);