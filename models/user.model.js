const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModelSchema = new Schema(
    {
        name: { type: String, trim: true, required: true },
        username: { type: String, trim: true, unique: true, required: true },
        password: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true },
        isAdmin: { type: Boolean, default: false },
    },
    { versionKey: false }
);
UserModelSchema.plugin(require("mongoose-autopopulate"));

const UserModel = mongoose.model("users", UserModelSchema, "users");

module.exports = {UserModel};
