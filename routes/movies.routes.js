// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model.js")
const MoviesModel = require("../models/Movie.model.js")

// GET
router.get("/create", async (req, res, next) => {
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
router.post("/create", async (req, res, next) => {
    const { title, genre, plot, cast } = req.body

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


router.get("/", async (req, res, next) => {

    try {
        const response = await MoviesModel.find()
        res.render("movies/movies.hbs", {
            allMovies: response
        })

    } catch (error) {
        next(error)
    }
})

router.get("/:movieId", async (req, res, next) => {
    try {
        const { movieId } = req.params;
        const response = await MoviesModel.findById(movieId).populate("cast");

        res.render("movies/movie-details.hbs", {
            details: response,
        });
    } catch (error) {
        next(error);
    }
});

router.post("/:movieId/delete", async (req, res, next) => {

    try {
        await MoviesModel.findByIdAndDelete(req.params.movieId);
        res.redirect("/movies")
    } catch (error) {
        next(error)
    }
})

router.get("/:movieId/edit", async (req, res, next) => {
    try {
        const response = await MoviesModel.findById(req.params.movieId).populate("cast", "name");

        res.render("movies/edit-movie.hbs", response);
    } catch (error) {
        next(error);
    }
});

router.post("/:movieId/edit", async (req, res, next) => {

    const { movieId } = req.params
    const { title, genre, plot, cast } = req.body

    try {
        await MoviesModel.findByIdAndUpdate(movieId, { title, genre, plot, cast })
        res.redirect("/movies/:movieId")

    } catch (error) {
        next(error)
    }


})

module.exports = router;