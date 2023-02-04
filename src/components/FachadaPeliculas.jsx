
import React from 'react'

import { obtenerPeliculas, guardarPelicula, eliminarPelicula } from './PeliculasBaseDatos'
import { cargarPeliculas } from './PeliculaAPI'

export const buscarPelicula = async (titulo) =>{
    let datajson = await cargarPeliculas(titulo);
    return datajson;
}

export const anadirPelicula = async (pelicula) => {
    const res = await guardarPelicula(pelicula);
    console.log(res);
}

export const borrarPelicula = async (selectionModel) =>{
    const res = await eliminarPelicula(selectionModel);
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

