import { collection, getDocs, addDoc, deleteDoc, doc} from "firebase/firestore";
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
      var tmpData  = doc.data();
      var key = doc.id;
      peliculas.push({key,
        ...tmpData});
           
    });
    console.log(coleccion);
    console.log(peliculas);
    return peliculas;
  
}

export const eliminarPelicula = async (selectionModel) => {
  if (selectionModel != null) {
    await deleteDoc(doc(db, "MisPeliculas", selectionModel.row.key));
  }
  //console.log(selectionModel.row);
  //window.location.reload();
}
