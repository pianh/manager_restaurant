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
        creat_at: {type: Date, require: true, default: Date.now}
    },
    { versionKey: false }
);
CommentsModelSchema.plugin(require("mongoose-autopopulate"));
const CommentsModel = mongoose.model("comments",CommentsModelSchema);

module.exports = {CommentsModel};