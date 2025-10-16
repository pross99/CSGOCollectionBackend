const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    id: {type: String, required: true },
    name: {type: String, required: true},
    description: {type: String, required: true},
    weapon: {type: Object, required: true},
    category: {type: Object, required: true},
    pattern: {type: Object, required: true},
    min_float: {type: Number, required: true},
    max_float: {type: Number, required: true},
    rarity: {type: Object, required: true},
    stattrak: {type: Boolean, required: true},
    souvenir: {type: Boolean, required: true},
    paint_index: {type: Number, required: true},
    wears: {type: Object, required: true},
    collections: {type: Array, required: true},
    crates: {type: Array, required: true},
    team: {type: Object, required: true},
    legacy_model: {type: Boolean, required: true},
    image: {type: String, required: true},
    original: {type: Object, required: true},
    estimatedPrice: {type: Number, required: true}
},{collection: 'ItemCollection'})

module.exports = mongoose.model("Item", itemSchema);