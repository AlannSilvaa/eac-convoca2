import express from "express"
import { userController } from "../controllers/userControllers.js";

const router = express.Router();

router.get('/jugadores', userController)

export { router }; 