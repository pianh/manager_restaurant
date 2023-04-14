const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersModelSchema = new Schema(
    {
        ticket: { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "ticket", 
            required: true },
        food: { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "foods", 
            required: true },
        quantity: { type: Number, required: true }, 
        price:  { type: Number, required: true },
    },
    
    { versionKey: false }
);

OrdersModelSchema.plugin(require("mongoose-autopopulate"));
const OrdersModel = mongoose.model("orders",OrdersModelSchema);

module.exports = {OrdersModel};
//là bảng có món ăn