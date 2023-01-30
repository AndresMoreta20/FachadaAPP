import React, { useEffect, useState } from 'react'

function PeliculasAPI() {
  const [cargando, setCargando] = useState(false);
  const urlDeAPI = 'http://www.omdbapi.com/?t=Bladerunner&apikey=2ac64ca8'
  const [titulo, setTitulo] = useState("");
  let peliculas = "";

  async function cargarPeliculas(url) {

    const respuesta = await fetch(url)
      .then(response => response.json())
      .then(json => { peliculas = json })
    console.log(peliculas)
    // let objPelis = JSON.parse(JSON.stringify(peliculas))
    //console.log(objPelis);
    //console.log(objPelis.Title)
    //console.log(peliculas.Genre)
    setTitulo(peliculas.Title.toString());
    //console.log(titulo);
    const pelicula = {titulo:peliculas.Title.toString(), 
      anio: peliculas.Year.toString(),
      duracion: peliculas.Runtime.toString(),
      poster: peliculas.Poster.toString(),
      genero: peliculas.Genre.toString(),
      director: peliculas.Director.toString(),
      pais: peliculas.Country.toString()}
      console.log(pelicula)
      return pelicula;
    }

  useEffect(() => {
    cargarPeliculas(urlDeAPI);
    console.log('----------------------')

  }, [])

  return (
    <div>PeliculasAPI</div>
  )
}

export default PeliculasAPI