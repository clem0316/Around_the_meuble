const db = require("../models");
const Meubles = db.meubles;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.type) {
    res.status(400).send({
      message: "Il faut un type pour le meuble",
    });
    return;
  }

  // Créer un meuble dans la base de données

  const meuble = {
    type: req.body.type,
    nom: req.body.nom,
    photo: req.body.photo,
    description: req.body.description,
    prix: req.body.prix,
    couleur: req.body.couleur,
    matiere: req.body.matiere,
    dimensions: req.body.dimensions,
    stock: req.body.stock,
    status: "Article à valider",
  };

  Meubles.create(meuble)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
};

//Création de la fonction qui permet de chercher les meubles par leurs types
exports.findAllByType = (req, res) => {
  const type = req.query.type;
  let condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

  Meubles.findAllByType({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
};

//Création de la fonction qui permet de chercher les meubles par leurs IDs
exports.findAllById = (req, res) => {
  const id = req.query.id;
  let condition = id ? { id: { [Op.eq]: `%${id}%` } } : null;

  Meubles.findAllById({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
};

//Création de la fonction qui permet de chercher TOUT les meubles
exports.findAll = (req, res) => {

  Meubles.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
};


//Création de la fonction qui permet de modifier un meuble

exports.updateMeuble = async (req, res) => {
  // Chercher l'ID du meuble
  const id = req.query.id;
  // Ancienne valeur pour le statut
  const status = req.query.status;
  
  try {
    // Vérifier l'existence du meuble
    const meuble = await Meubles.findByPk(id);
    if (!meuble) {
      return res.status(404).json({ message: 'Meuble introuvable.' });
    }
  
    // Modifier la valeur du statut
    meuble.status = status;
  
    // Enregistrer les modifications dans la table meubles
    await meuble.save();
  
    // Réponse
    res.json({ message: 'Le statut du meuble a été mis à jour.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de la mise à jour du statut du meuble.' });
  }
};

//Création de la fonction qui permet de SUPPRIMER un meuble
exports.deleteMeuble = async (req, res) => {
  const id = req.query.id;
  let condition = id ? { id: { [Op.eq]: `%${id}%` } } : null;
  
  Meubles.destroy({where: condition})
    .then((data) => {
      res.send(data);
      res.json({ message: 'Le meuble à bien été supprimé' });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
  }