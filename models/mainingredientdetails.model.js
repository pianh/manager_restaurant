const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MainingredientDetailsModelSchema = new Schema(
    {
        food: { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref: "foods", 
            required: true },
        mainingredients: {
            type:[{
                mainingredient:{ 
                    type: mongoose.Schema.Types.ObjectId,
                    autopopulate: true, 
                    ref: "mainingredients"
                },
                quantity: { type: Number, trim: true, required: true },
                unit: { type: String, trim: true, required: true }
            }    
        ],
            required: true 
        } ,
    },  
    { versionKey: false }
);
MainingredientDetailsModelSchema.plugin(require("mongoose-autopopulate"));

const MainingredientDetailsModel= mongoose.model("mainingredientdetails", MainingredientDetailsModelSchema, "mainingredientdetails");

module.exports ={MainingredientDetailsModel};
