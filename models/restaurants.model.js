const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantsModelSchema = new Schema(
    {
        name: { type: String, trim: true, required: true }, 
        image: { type: String, trim: true, required: true },
        address: {
            type: [
                { type: String, trim: true, required: true }
            ],
            require: true
        } ,
        phone: { type: String, trim: true, required: true },
    },
    
    { versionKey: false }
);

RestaurantsModelSchema.plugin(require("mongoose-autopopulate"));
const RestaurantsModel = mongoose.model("restaurants", RestaurantsModelSchema, "restaurants");

module.exports = {RestaurantsModel};
//là bảng có món ăn