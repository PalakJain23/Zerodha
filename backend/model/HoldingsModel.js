// backend/model/HoldingsModel.js
const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// Register model
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
