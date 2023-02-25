const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscountsModelSchema = new Schema(
    {
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "restaurants", 
            required: true},     
        name: { type: String, trim: true, unique:true, required: true },
        money:  { type: Number },
        percent: { type: Number},
        expired_at: { type: Date, required: true},
       
    },
    { versionKey: false }
);
DiscountsModelSchema.plugin(require("mongoose-autopopulate"));
const DiscountsModel  = mongoose.model("discounts", DiscountsModelSchema, "discounts");

module.exports = {DiscountsModel} ;