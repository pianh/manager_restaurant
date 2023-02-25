const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsModelSchema = new Schema(
    {
        bill:  { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref: "bills" , 
            required: true },
        content: { type: String, trim: true, required: true },
        point:{ type: Number, required: true },
    },
    { versionKey: false }
);
CommentsModelSchema.plugin(require("mongoose-autopopulate"));
const CommentsModel = mongoose.model("comments",CommentsModelSchema, "comments");

module.exports = {CommentsModel};