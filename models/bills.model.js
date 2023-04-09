const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillsModelSchema = new Schema(
    {
        ticket: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "ticket", 
            required: true},  
        discount: { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref:"discount", 
            default: null},
        manager: { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "user", 
            required: true},
        address: {type: String, require: true},
        bill_code: { type: Number, required: true },
        create_at:{type: Date, require: true, default: Date.now}, 
        sum_total: { type: Number, required: true }, 
        status: { type: Boolean, default: false }, 
        
    },  
    { versionKey: false }
);
BillsModelSchema.plugin(require("mongoose-autopopulate"));
const BillsModel = mongoose.model("bills", BillsModelSchema);

module.exports = {BillsModel};
// Bên code thì lại không có bảng có món ăn //này là bảng order

