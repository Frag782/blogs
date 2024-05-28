const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const { corsOptions, sessionOptions } = require('./config');

mongoose.connect('mongodb://localhost/blogs-users')
    .then( () => { console.log('Connecté à la BD utilisateurs.') })

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(session(sessionOptions));
app.use(userRoutes);

const PORT = 3001;
app.listen(PORT, () => { console.log(`Serveur à l\'écoute sur le port ${PORT}.`) })