import express from "express"
import { getPlayers } from "../controllers/userControllers.js";
import { newPlayer } from "../controllers/userControllers.js";

const router = express.Router();

router.get('/jugadores', getPlayers)
router.post('/nuevojugador', newPlayer)

export { router }; 