const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypesOfPartyModelSchema = new Schema(
    {
        name: { type: String, trim: true, required: true },
        status: { type: Boolean, default: true },
    },
    { versionKey: false }
);

TypesOfPartyModelSchema.plugin(require("mongoose-autopopulate"));
const  TypesOfPartyModel = mongoose.model("typesofparty", TypesOfPartyModelSchema, "typesofparty");

module.exports =  {TypesOfPartyModel};