module.exports = (app) => {
  const meubles = require("../controllers/meubles.controller.js");

  let router = require("express").Router();

  // Une route pour créer un nouveau meuble
  router.post("/", meubles.create);

  // Une route pour obtenir toutes les données de tous les meubles
  router.get("/", meubles.findAll);

  // Une route pour obtenir toutes les données des meubles par type
  // router.get("/", meubles.findAllByType);

  // Une route pour obtenir toutes les données des meubles par IDs
  // router.get("/", meubles.findAllById);

  // Une route pour modifier les meubles
  //router.put("/", meubles.update);

  // Une route pour supprimer un meuble
  router.delete("/", meubles.deleteMeuble);

  // On détermine l'URL pour notre API
  app.use("/api/meubles", router);
};
