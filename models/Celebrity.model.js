const mongoose = require("mongoose")

const celebritiesSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String,

    // timestamps: true
})

//  Add your code here
const CelebrityModel = mongoose.model("Celebrity", celebritiesSchema)
module.exports = CelebrityModel
