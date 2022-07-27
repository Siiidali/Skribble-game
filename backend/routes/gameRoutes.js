const express = require('express');
const gameControllers = require('../controllers/gameControllers');
const router = express.Router();

router.get('/:room',gameControllers.getGame)
router.post('/create',gameControllers.createGame)
router.post('/join',gameControllers.joinGame)



module.exports = router; 