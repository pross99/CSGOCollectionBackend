const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema({
    itemId: {type: String, required: true },
    wear: {type: String, required: true },
    float: {type: Number, required: true },
    userName: {type: String, default: 'Pede'},
    rarity: {type: String, required: true},
    estimatedPrice: {type: Number, required: false},
    statTrack: {type: Boolean, default: false}
},{collection: 'user'})

module.exports = mongoose.model("Collection", CollectionSchema);