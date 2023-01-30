import { collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore";
import {db} from '../config/config'


export const guardarPelicula = async (pelicula) => {
  /*console.log(pelicula)
  await setDoc(doc(db,'MisPeliculas',pelicula.titulo), pelicula)
  */
  const res = await addDoc(collection(db, "MisPeliculas"), {
    titulo: pelicula.titulo,
    anio: pelicula.anio,
    duracion: pelicula.duracion,
    poster: pelicula.poster,
    genero: pelicula.genero,
    director: pelicula.director,
    pais: pelicula.pais
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
    return peliculas;
}
