const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema({
    itemId: {type: String, required: true },
    wear: {type: String, required: true },
    float: {type: Number, required: true },
    userName: {type: Boolean, default: false},
    rarity: {type: String, required},
    estimatedPrice: {type: Number, required: true},
    statTrack: {type: Boolean, default: false}
},{collection: 'user'})

module.exports = mongoose.model("Collection", CollectionSchema);