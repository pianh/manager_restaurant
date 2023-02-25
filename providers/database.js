const mongoose = require("mongoose");
class MongoDB {
    static async connect(uri) {
        mongoose.set("strictQuery", false);
        mongoose.set('debug', false);
        await mongoose.connect(uri);
    }
}

module.exports = MongoDB;
