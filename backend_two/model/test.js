const mongoose = require("mongoose");
const crete_schema = new mongoose.Schema({
    EventName: String,
    EventId: String,
    MarketId: String
}, { timestamps: true })
module.exports = mongoose.model("Create", crete_schema);