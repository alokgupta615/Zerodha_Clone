const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const HoldingModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };
