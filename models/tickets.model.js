const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  TicketsModelSchema = new Schema (
    {
        typesofparty:  {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "typesofparty", 
            required: true},  
        table:   {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref:"table", required: true},  
        user: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref:"user", 
            required: true},  
        restaurant: {
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true, 
            ref: "restaurants", 
            required: true},  
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
    
    },  
    
    { versionKey: false }
);

TicketsModelSchema.plugin(require("mongoose-autopopulate"));

const  TicketsModel = mongoose.model("tickets", TicketsModelSchema, "tickets");

module.exports =  {TicketsModel};