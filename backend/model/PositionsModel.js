// backend/model/PositionsModel.js
const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

// Register the model
const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };
