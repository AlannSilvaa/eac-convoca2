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


const getPlayersByID = async (req,res) => {
    const playerId = parseInt(req.params.id);

    try  {
        const player = await prisma.jugadores.findUnique({
            where: { id: playerId},
        });

        if (!player) {
            return  res.status(404).json({ mensaje: "No se encuentra este jugador" });
        }
        res.json(player);
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
      }
} 


const deletePlayer = async (req, res) => {
    const playerId = parseInt(req.params.id);

    try  {
        const player = await prisma.jugadores.findUnique({
            where: { id: playerId},
        });

        if (!player) {
            return  res.status(404).json({ mensaje: "No se encuentra este jugador" });
        }

        await prisma.jugadores.delete({
            where: { id: playerId}
        })

        res.json({ mensaje: 'El jugador se elimino perfectamente'})
}catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
}

export { getPlayers, newPlayer, getPlayersByID, deletePlayer };
