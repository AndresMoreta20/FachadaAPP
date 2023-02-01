
import './App.css';
import { useEffect, useState } from 'react';

import { buscarPelicula, anadirPelicula, listaPeliculas } from './components/FachadaPeliculas';

function App() {



  const [peliTitulo, setPeliTitulo] = useState("");
  const [listaPelis, setListaPelis] = useState([{ titulo: 'prueba', anio: 2000 }])

  const enviar = async (e) => {
    e.preventDefault();
    const varjson = await buscarPelicula(peliTitulo);

    anadirPelicula(varjson);
    // window.location.reload(false);
  }

  const cargarLista = async () => {
    let lista = await listaPeliculas();
    setListaPelis(lista);
  }

  useEffect(() => {
    cargarLista();
  }, []);

  return (
    <div style={{ backgroundColor: '#0C2A31', color: 'white', height: '100vh' }} className="App">
      <div style={{ padding: '2rem' }} >
        <h1>Mi lista de Peliculas</h1>
        <p>Andres Moreta Proyecto.</p>
      </div>
      <div style={{ backgroundColor: '#CFDAE4', color: 'black', height: '100vh', paddingTop: '2rem' }} >
        <form >
          <div style={{ padding: '2rem' }}>
            <label >
              Ingresa el nombre de la pelicula<br /><br />
              <input value={peliTitulo} type="text" onChange={e => { setPeliTitulo(e.target.value) }}></input><br /><br />
            </label>
          </div>
          <button style={{ padding:'1em' , backgroundColor:'#468499'}} 
          onClick={(e) => {
            e.preventDefault();
            enviar(e);

          }
          }>Agregar</button>
        </form><br />
        <div style={{ paddingTop: '2rem' }}>

          <div>

            <button style={{padding:'1em' , backgroundColor:'#A0DB8E'}} onClick={() => { window.location.reload(false); }}> Recargar</button>
          </div>


          {listaPelis.map((peli, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: '2em', paddingRight: '2em', borderBlockStyle: 'solid' }}>
              <h3>Titulo: {peli.titulo}</h3>
              <h3>Director: {peli.director}</h3>
              <h3 >Genero: {peli.genero}</h3>
              <h3 >Año: {peli.anio}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
