const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodsModelSchema = new Schema(
    {
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "restaurants", 
            required: true},  
        name: { type: String, trim: true, required: true },
        price: { type: Number, trim: true, required: true },
        image_url: [
            { type: String, trim: true, required: true }
        ],
        // content:{type: String, trim: true, required: true},
        status: { type: Boolean, default: true },
    },
    { versionKey: false }
);
FoodsModelSchema.plugin(require("mongoose-autopopulate"));
const FoodsModel = mongoose.model("foods", FoodsModelSchema, "foods");

module.exports = {FoodsModel};