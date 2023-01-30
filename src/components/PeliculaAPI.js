
export const cargarPeliculas = async (nombre) => {
    //const urlDeAPI = 'http://www.omdbapi.com/?t=Bladerunner&apikey=2ac64ca8'
    let peliculas = "";
    const urlA = 'http://www.omdbapi.com/?t='
    // var nombre = 'Bladerunner'
    const urlC = '&apikey=2ac64ca8'
    const nuevoURL = urlA + nombre + urlC
    fetch(nuevoURL)
        .then(res => {
            if (res.ok) {
                console.log('correct')
            } else {
                console.log('error')
            }

            return res.json()
        }
        )
        .then(data => { return data })
        .catch(error => console.log(error));
    /* const respuesta = await fetch(urlA)
        .then(response => response.json())
        .then(json => { peliculas = json })
   // console.log(peliculas)

    const pelicula = {
        titulo: peliculas.Title.toString(),
        anio: peliculas.Year.toString(),
        duracion: peliculas.Runtime.toString(),
        poster: peliculas.Poster.toString(),
        genero: peliculas.Genre.toString(),
        director: peliculas.Director.toString(),
        pais: peliculas.Country.toString()
    }
    //console.log(pelicula)
    return pelicula;
    */
}