const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Celebrity"
        }
    ]
})

const MoviesModel = mongoose.model("Movie", moviesSchema)
module.exports = MoviesModel