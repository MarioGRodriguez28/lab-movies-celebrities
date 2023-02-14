// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model.js")
const MoviesModel = require("../models/Movie.model.js")

// GET
router.get("/create", async (req, res, next)=>{
    try {
        const response = await CelebrityModel.find().select("name")
        res.render("movies/new-movie", {
            allCast: response
        })
    } 
    catch (error) {
        next(error)    
    }
})

// POST
router.post("/create", async (req, res, next)=>{
    const {title, genre, plot, cast} = req.body

    try {
        const response = await MoviesModel.create({
            title,
            genre,
            plot,
            cast
        })
        res.redirect("/movies")
    } 
    catch (error) {
        next(error)   
    }
})


module.exports = router;