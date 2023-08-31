const express = require('express');
const cors = require('cors');

const app = express();

const db = require("./app/models");
db.sequelize.sync();

// Using port 5174 for connection
let corsOptions = {
    origin: 'http://localhost:5173'
};

app.use(cors(corsOptions));

// Post data in JSON format.
app.use(express.json());

// Post data in URLs as strings or arrays.
app.use(express.urlencoded({extended: true})); 

app.get('/', (request, resolve) => {
    resolve.json(({message : 'Welcome to AROUND THE MEUBLE'}))
})

require("./app/routes/meubles.route")(app);
require("./app/routes/users.route")(app);
// require("./app/routes/userfav.route")(app);


const PORT = 5174;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`)
});

