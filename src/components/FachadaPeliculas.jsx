
import React from 'react'

import { obtenerPeliculas, guardarPelicula } from './PeliculasBaseDatos'
import { cargarPeliculas } from './PeliculaAPI'

export const buscarPelicula = async (titulo) =>{
    let datajson = await cargarPeliculas(titulo);
    return datajson;
}

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
    return 0;
   })

   return(
    <ul>{list}</ul>
   );
  

}
