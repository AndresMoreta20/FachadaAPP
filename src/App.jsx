
import './App.css';
import { useEffect, useState } from 'react';

import { buscarPelicula, anadirPelicula, listaPeliculas } from './components/FachadaPeliculas';

function App() {



  const [peliTitulo, setPeliTitulo] = useState("");
//  const [peliAnio, setPeliAnio] = useState("");
  const [listaPelis, setListaPelis] = useState([{titulo:'prueba', anio:2000}])

const enviar = async (e)=>{
  e.preventDefault();
  const varjson = await buscarPelicula(peliTitulo);

  anadirPelicula(varjson);
}

const cargarLista = async () =>{
  let lista = await listaPeliculas();
  setListaPelis(lista);
}

useEffect(() => {
  cargarLista();
}, []);

  return (
    <div className="App">
      <div>
        <h1>Mi lista de Peliculas</h1>
        <p>Andres Moreta Proyecto.</p>
      </div>
      <div>
        <form>
          <label>
            Ingresa el nombre de la pelicula<br />
            <input value={peliTitulo} type="text" onChange={e => { setPeliTitulo(e.target.value) }}></input><br /><br />
          </label>

        
          <button onClick={(e) => {
            e.preventDefault();
           // const pelis = {titulo:peliTitulo, anio:peliAnio}
            enviar(e);

          }
          }>ENVIAR</button>
        </form>

          {listaPelis.map((peli, index)=>(
            <div key={index}>
              <h2>Titulo: {peli.titulo}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
