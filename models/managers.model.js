const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ManagerModelSchema = new Schema(
    {
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "restaurants", 
            required: true}, 
        user: { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "users", 
            required: true },
        expire_at: { type: Date, required: true }, 
        
    },
    
    { versionKey: false }
);

ManagerModelSchema.plugin(require("mongoose-autopopulate"));
const ManagerModel = mongoose.model("managers",  ManagerModelSchema);

module.exports = {ManagerModel};
//là bảng có món ăn