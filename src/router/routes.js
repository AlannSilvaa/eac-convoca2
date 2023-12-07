import express from "express"
import { getPlayers } from "../controllers/userControllers.js";
import { newPlayer } from "../controllers/userControllers.js";
import { getPlayersByID } from "../controllers/userControllers.js";

const router = express.Router();

router.get('/jugadores', getPlayers)
router.post('/jugador', newPlayer)
router.get('/jugadores/:id', getPlayersByID)

export { router }; 