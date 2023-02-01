import { collection, getDocs, addDoc} from "firebase/firestore";
import {db} from '../config/config'


export const guardarPelicula = async (pelicula) => {
  /*console.log(pelicula)
  await setDoc(doc(db,'MisPeliculas',pelicula.titulo), pelicula)
  */
  const res = await addDoc(collection(db, "MisPeliculas"), {
    titulo: pelicula.Title,
    anio: pelicula.Year,
    genero: pelicula.Genre,
    director: pelicula.Director,
    sinopsis: pelicula.Plot,
    poster: pelicula.Poster

  });
  console.log(res);
}

export const obtenerPeliculas = async () => {
  const querySnapshot = await getDocs(collection(db, 'MisPeliculas'));
    const coleccion = collection(db, 'users');
    var peliculas = [];
    querySnapshot.docs.forEach(doc => {
            peliculas.push(doc.data());
    });
    console.log(coleccion);
    console.log(peliculas);
    return peliculas;
    
}
