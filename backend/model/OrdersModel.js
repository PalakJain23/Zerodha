// backend/model/OrdersModel.js

const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

// Register the model
const OrdersModel = model("order", OrdersSchema);

module.exports = { OrdersModel };
