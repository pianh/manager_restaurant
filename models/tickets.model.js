const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  TicketsModelSchema = new Schema (
    {
        typeofparty:  {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "typesofparties"
        },  
        table:   {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref:"tables"
        },  
        user: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref:"users", 
            required: true},  
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "restaurants"
        },  
        manager: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "managers", 
            default: null},
        received_date: { type: Date, required: true }, //ngay dat ban
        payment_date: { type: Date, default: null}, // có thể null 
        customer_name: { type: String, trim: true, required: true },
        customer_phone: { type: String, trim: true, required: true },
        customer_address: { type: String, trim: true, required: true },
        quantity: { type: Number, default: 0}, //đặt đồ ăn về thì chỗ ngồi đó 0
        total: { type: Number}, //đặt đồ ăn về thì chỗ ngồi đó 0
    
    },  
    
    { versionKey: false }
);

TicketsModelSchema.plugin(require("mongoose-autopopulate"));

const  TicketsModel = mongoose.model("tickets", TicketsModelSchema);

module.exports =  {TicketsModel};