const bcrypt = require('bcrypt');
const { User } = require('../models/userModel');

exports.register = (req, res) => {
    const { username, password } = req.body;
    
    const saveUser = () => {
        bcrypt.hash(password, 10)
        .then( (passwordHash) => {
            User.create({ username, passwordHash })
            .then( (user) => {
                user.save();
                res.status(201).send('Votre compte a été créé.');
            })
        })
        .catch( (error) => {
            console.log(error);
            res.status(500).send('Erreur lors de la création du compte.');
        })
    }

    User.findOne({ username: username })
        .then( (user) => {
            if (user) return res.status(401).send('Ce nom d\'utilisateur existe déjà.');
            else saveUser();
        })
}

exports.login = (req, res) => {
    const { username, password } = req.body;
    
    User.findOne({ username: username })
        .then( (user) => {
            if (!user) res.status(404).send('Nom d\'utilisateur et/ou mot de passe incorrect(s).');
            else {
                bcrypt.compare(password, user.passwordHash)
                    .then( (result) => {
                        if (result) {
                            req.session.user = user;
                            res.status(200).send(user);
                        } else {
                            res.status(404).send('Nom d\'utilisateur et/ou mot de passe incorrect(s).');
                        }
                    })}
        })
        .catch( (error) => {
            console.log(error);
            res.status(500).send('Erreur lors de la connexion.');
        })
}

exports.logout = (req, res) => {
    req.session.user = null;
    res.send('Vous êtes maintenant déconnecté.');
}

exports.checkAuthStatus = (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('Non authentifié');
    }
};

exports.findByUsername = (req, res) => {
    const { username } = req.params;

    User.findOne({ username: username })
        .then( (user) => {
            if (!user) res.status(404).send('Nom d\'utilisateur introuvable.')
            else res.status(200).send(user)
        })
        .catch( (error) => {
            console.log(error);
            res.status(500).send('Erreur liée au serveur.');
        })

    // bcrypt.compare password
}