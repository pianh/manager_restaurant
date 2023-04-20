const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MainingredientsModelSchema = new Schema(
    {
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "restaurants", 
            required: true},  
        name: { type: String, trim: true, required: true },
        status: { type: Boolean, default: true },
    },
    { versionKey: false }
);
MainingredientsModelSchema.plugin(require("mongoose-autopopulate"));
const MainingredientsModel = mongoose.model("mainingredients", MainingredientsModelSchema);

module.exports = {MainingredientsModel}; 