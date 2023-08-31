const db = require("../models");
const Users = db.users;

 // import du module bcrypt (bibliothèque de hachage de mot de passe pour les crypter)
 const bcrypt = require('bcrypt');

 // import du module jsonwebtoken utilisé pour créer des tokens d'authentification : JWT (JSON Web Token)
 const jwt = require('jsonwebtoken');

const hashPassword = async (password) =>
{let hashedPassword = await bcrypt.hash(password, 10);
return hashedPassword}

const findUser = async (user) =>
{await Users.findOne({where: {email: user}})}

const comparePassword = async (password, hashPassword) =>
{await bcrypt.compare(password, hashPassword)}

 exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "Entrez un Email",
    });
    return;
  };
  //Creer un USER dans la base de données
  // bcrypt hash le password du "user".
  // Il doit faire 10 tours d'execution (d'itérations) pour hasher le password définit comme le "salt"
  const hashedPassword = hashPassword(req.body.password)
  // console.log(hashedPassword)
  .then((hashedPassword) =>{

    console.log(hashedPassword)

    const user = {
      email: req.body.email,
      password: hashedPassword,
      nom: req.body.nom,
      prenom: req.body.prenom,
    };
    
    Users.create(user)
    .then((data) => {
      res.send(data);
    })
    
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été detectée",
      });
    });
  })
  };

exports.getToken = (req, res) => {
  try {
    // On cherche dans la BDD un "user" avec l'e-mail fourni.
    const user = findUser(req.body.email);
    // Vérification de l'existence du "user", sinon envoie du message 'Authentication failed!'
    if (!user) {
        return res.status(401).json({message: 'Authentication failed!'});
    }

    // bcrypt compare le password fourni avec le password hashé, stocké dans la BDD
    const isEqual = comparePassword(req.body.password, user.password);
    // Vérification si les passwords se correspondent, sinon envoie du message 'Authentication failed!'
    if (!isEqual) {
        return res.status(401).json({message: 'Authentication failed!'});
    }
    // Si les passwords se correspondent, on crée un token d'authentification "JWT"
    const token = jwt.sign(
        {userId: user.id, email: user.email},
        'Super_Secret_Key',
        {expiresIn: '1h'}
    );
    // On envoie une réponse au client avec le token "JWT" et l'ID du "user"
    res.json({token: token, userId: user.id});
} catch (error) {
    // Sinon on affiche l'erreur !
    next(error);
}
}
