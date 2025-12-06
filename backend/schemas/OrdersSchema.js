// backend/schemas/OrdersSchema.js

const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  percent: { type: Number, required: true },
  mode: { type: String, required: true }
});

module.exports = { OrdersSchema };
