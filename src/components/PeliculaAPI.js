
export const cargarPeliculas = async (nombre) => {
    //const urlDeAPI = 'http://www.omdbapi.com/?t=Bladerunner&apikey=2ac64ca8'
    let datajson;
    const urlA = 'https://www.omdbapi.com/?t='
    // var nombre = 'Bladerunner'
    const urlC = '&apikey='+process.env.REACT_APP_API_KEY
    const nuevoURL = urlA + nombre + urlC
    console.log(nuevoURL);
    await fetch(nuevoURL)
        .then(res => {
            if (res.ok) {
                console.log('correct')
            } else {
                console.log('error')
            }

            return res.json()
        }
        )
        .then(data => {datajson = data })
        .catch(error => console.log(error));
        console.log(datajson);
        return datajson;

}