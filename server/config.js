exports.corsOptions = {
    origin: 'http://localhost:3000', // URL front-end
    credentials: true
}

exports.sessionOptions = {
    secret: 'UeFunWxHfgAhJ4Cec3HqqhtgNdtXz4oS',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,  // Empêche l'accès au cookie via JavaScript côté client
        secure: false,   // False en développement, true en production (HTTPS)
        sameSite: 'strict' // Empêche l'envoi du cookie avec les requêtes inter-sites
    }
}