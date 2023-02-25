const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  FeedbacksModelSchema = new Schema(
    {
        comment: { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref:"comments", 
            required: true },
        manager: { 
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true,
            ref:"managers", 
            required: true }, 
        content: { type: String, trim: true, required: true },
    },

    { versionKey: false }
);
FeedbacksModelSchema.plugin(require("mongoose-autopopulate"));
const  FeedbacksModel  = mongoose.model("feedbacks",  FeedbacksModelSchema, "feedbacks");

module.exports = {FeedbacksModel} ;