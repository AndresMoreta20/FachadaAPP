
import React from 'react'

import { obtenerPeliculas, guardarPelicula } from './PeliculasBaseDatos'



export const anadirPelicula = async (pelicula) => {
    const res = await guardarPelicula(pelicula);
    console.log(res);
}

export const listaPeliculas = async ()=>{
    const lista = await obtenerPeliculas();
    return lista;
}

export function mostrarPelicula (pelicula) {
    return(
        <div>
            <p>Titulo: </p>
            <p>{pelicula.titulo}</p><br/>
            <p>Año: </p>
            <p>{pelicula.anio}</p><br/>

        </div>
    )
}

export function ListaPeliculas(dato) {
   
    const list = dato.detalles.map((peli)=>{
    <li>{peli}</li>
   })

   return(
    <ul>{list}</ul>
   );
   /*
    return (
        <div>
            <h1>Mis Peliculas</h1>
            <table id="tablaPeliculas">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Año</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {detalles.map((peli, index) => (
                        <tr key={index}>
                            <th>{peli.titulo}</th>
                            <th>{peli.anio}</th>
                          
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )*/
}

export function FachadaPeliculas() {
    return (
        <div>FachadaPeliculas</div>
    )
}

export function Prueba1() {
    return (
        <div>prueba1</div>
    )
}

