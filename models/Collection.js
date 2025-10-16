const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema({
    itemId: {type: String, required: true },
    wear: {type: String, required: true },
    float: {type: Number, required: true },
    userName: {type: String, required: true}
},{collection: 'user'})

module.exports = mongoose.model("Collection", CollectionSchema);