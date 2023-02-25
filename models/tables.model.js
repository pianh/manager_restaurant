const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TablesModelSchema = new Schema(
    {
        name: { type: String, trim: true, required: true },
        status: { type: Boolean, default: true },
    },
    { versionKey: false }
);

TablesModelSchema.plugin(require("mongoose-autopopulate"));

const TablesModel = mongoose.model("tables", TablesModelSchema, "tables");

module.exports = {TablesModel};