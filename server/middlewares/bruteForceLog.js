const bruteForceLog = require('express-rate-limit'); // Import du module 'express-rate-limit' permettant de limiter le nombre de request à l'API

// Blocage de 5 minutes s'il y a 5 tentatives erronées
module.exports = bruteForceLog({
	windowMs: 5 * 60 * 1000,
	max: 5,
	statusCode: 200,
	message: {
		status: 429,
		errorBrute:
			"Vous avez atteint le nombre de tentative maximum, veuillez réessayer dans 5 minutes !"
	},
});

