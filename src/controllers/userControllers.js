import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPlayers = async (req, res) => {

    try{
        const user = await prisma.jugadores.findMany();
        res.json(user)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
      }
    }


const newPlayer = async (req, res) => {

    const {
        nombre,
        edad,
        equipo,

    }=req.body;
    try{
          await prisma.jugadores.create({
            data: {
                nombre: nombre,
                edad: edad,
                equipo: equipo,
            }
        })
        
        res.status(201).json({message: "Creado"})
    }catch (err){
        console.error(err);
        res.status(400).json({ error: err });
    }
}

export { getPlayers, newPlayer };
