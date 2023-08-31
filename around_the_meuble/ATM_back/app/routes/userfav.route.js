module.exports = app => {
    const userfav = require("../controllers/userfav.controller.js");

    let router = require("express").Router();

    // Une route pour créer un nouveau favoris
    router.post("/", userfav.create);

    // On détermine l'URL pour notre API 
    app.use('/api/userfav', router);
}