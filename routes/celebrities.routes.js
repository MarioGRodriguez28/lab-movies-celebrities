// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model.js")


// GET "/create"
router.get("/create", (req, res, next)=>{
    res.render("celebrities/new-celebrity.hbs")
})
// POST "/create"
router.post("/create", async (req, res, next)=>{

    const { name, occupation, catchPhrase } = req.body

    
    try {
        
        await CelebrityModel.create({
            name,
            occupation,
            catchPhrase,
        })
        
        console.log(req.body);
        res.redirect("/celebrities")
        
    } 
    catch (error) {
        next(error)  
    }
})




// all your routes here

module.exports = router;