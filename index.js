import express from 'express';
import { router } from './router/routes.js';

const app = express();

app.use(express.json());

app.use(router)

app.listen(3000, () => (console.log('Este servidor esta corriendo en el puerto 3000 como vos pediste :)')))

async function ListaDeConvocados() {

    const jugadores = [
        { nombre: 'Sergio Rochet', edad: 33, equipo: "Internacional"},
        { nombre: 'Franco Israel', edad: 23, equipo: "Sporting CP"},
        { nombre: 'Santiago Mele', edad: 26, equipo: "Junior"},
        { nombre: 'Ronald Araujo', edad: 24, equipo: "Barcelona"},
        { nombre: 'Jose Maria Gimenez', edad: 28, equipo: "Atletico De Madrid"},
        { nombre: 'Sebastian Caceres', edad: 24, equipo: "America"},
        { nombre: 'Matias Viña', edad: 26, equipo: "Sassuolo"},
        { nombre: 'Bruno Mendez', edad: 24, equipo: "Corinthians"},
        { nombre: 'Guillermo Varela', edad: 30, equipo: "Flamengo"},
        { nombre: 'Matias Olivera', edad: 26, equipo: "Napoli"},
        { nombre: 'Manuel Ugarte', edad: 22, equipo: "PSG"},
        { nombre: 'Rodrigo Bentancour', edad: 26, equipo: "Tottenham"},
        { nombre: 'Federico Valverde', edad: 25, equipo: "Real Madrid"},
        { nombre: 'Felipe Carballo', edad: 27, equipo: "Gremio"},
        { nombre: 'Agustin Canobbio', edad: 25, equipo: "Paranaense"},
        { nombre: 'Nicolas de la Cruz', edad: 26, equipo: "River Plate"},
        { nombre: 'Giorgian de Arrascaeta', edad: 29, equipo: "Flamengo"},
        { nombre: 'Facundo Pellistri', edad: 21, equipo: "Manchester United"},
        { nombre: 'Maximiliano Araujo', edad: 23, equipo: "Toluca"},
        { nombre: 'Facundo Torres', edad: 23, equipo: "Orlando City"},
        { nombre: 'Cristian Olivera', edad: 21, equipo: "Los Angeles FC"},
        { nombre: 'Federico Viña', edad: 25, equipo: "Leon"},
        { nombre: 'Darwin Nuñez', edad: 24, equipo: "Liverpol"},
        { nombre: 'Luiz Suarez', edad: 36, equipo: "Gremio"},
       
    ];
}