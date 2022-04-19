// Imports
const express = require('express');
const router = express.Router();

// Ajout des controllers et middlewares
const authCtrl = require('../controllers/auth');
const bruteForceLog = require('../middlewares/bruteForceLog');

// Ajout des routes "auth"
router.post('/signup', authCtrl.signUp);
router.post('/login', authCtrl.login);

// Export
module.exports = router;