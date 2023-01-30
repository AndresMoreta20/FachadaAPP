import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { FachadaPeliculas, Prueba1, ListaPeliculas, anadirPelicula, mostrarPelicula } from './components/FachadaPeliculas';


function App() {



  const [peliTitulo, setPeliTitulo] = useState("");
  const [peliAnio, setPeliAnio] = useState("");
  const [peliA, setPeliA] = useState();
  const [tituloS, setTituloS] = useState("");
  const [listaPelis, setPlistaPelis] = useState( [{titulo:'prueba', anio:2000},
{titulo:'prueba2', anio:2000}]);
  //
  

  let lista = [{titulo:'prueba', anio:2000}];


  let peli;

  return (
    <div className="App">
      <div>
        <h1>Mi lista de Peliculas</h1>
      </div>
      <div>
        <form>
          <label>
            Ingresa el nombre de la pelicula<br />
            <input value={peliTitulo} type="text" onChange={e => { setPeliTitulo(e.target.value) }}></input><br /><br />
          </label>

          <label>
            Ingresa el año<br />
            <input value={peliAnio} type="number" onChange={e => { setPeliAnio(e.target.value) }}></input><br /><br />
          </label>

          <button onClick={(e) => {
            e.preventDefault();
            const pelis = {titulo:peliTitulo, anio:peliAnio}
            //anadirPelicula(pelis);
            lista.push(pelis);
            console.log(lista);
          }
          }>ENVIAR</button>
        </form>

      <ListaPeliculas detalles={lista}/>
      </div>
    </div>
  );
}

export default App;
