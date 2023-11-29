import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userController = async (req, res) => {

    try{
        const user = await prisma.jugadores.findMany();
        res.json(user)
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err });
      }
    }

export { userController };
