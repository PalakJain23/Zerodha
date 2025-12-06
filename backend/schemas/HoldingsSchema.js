// backend/schemas/HoldingsSchema.js
const {Schema} = require("mongoose");

const HoldingsSchema = new Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, default: 0 },
    avg: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    net: { type: String, default: "" },
    day: { type: String, default: "" },
    isLoss: { type: Boolean, default: false },
  },
);

module.exports = { HoldingsSchema };
