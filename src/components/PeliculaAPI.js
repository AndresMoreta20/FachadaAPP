
export const cargarPeliculas = async (nombre) => {
    //const urlDeAPI = 'http://www.omdbapi.com/?t=Bladerunner&apikey=2ac64ca8'
    let peliculas = "";
    const urlA = 'http://www.omdbapi.com/?t='
    // var nombre = 'Bladerunner'
    const urlC = ''
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

}