require("dotenv").config();
module.exports = {
    uri :process.env.MONGODB_SERVER ||  "mongodb://localhost:27017/restaurant_managerment_essay"
}