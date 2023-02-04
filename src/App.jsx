
import './App.css';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { buscarPelicula, anadirPelicula, listaPeliculas, borrarPelicula } from './components/FachadaPeliculas';


function App() {



  const [peliTitulo, setPeliTitulo] = useState("");
  const [listaPelis, setListaPelis] = useState([{ titulo: 'prueba', anio: 2000 }])
  const [selectionModel, setSelectionModel] = useState();

  const pelisGrid = [{ field: 'titulo', headerName: 'Título', width: '100' },
  { field: 'director', headerName: 'Director', width: '150' },
  { field: 'anio', headerName: 'anio', width: '150' },
  { field: 'genero', headerName: 'genero', width: '150' },
  ]

  const enviar = async (e) => {
    e.preventDefault();
    const varjson = await buscarPelicula(peliTitulo);
    anadirPelicula(varjson);
    // window.location.reload(false);
   // window.location.reload();
  }

  const cargarLista = async () => {
    let lista = await listaPeliculas();
    setListaPelis(lista);
  }

  const quitarPelicula = async (e) =>{
    e.preventDefault();
    const res = await borrarPelicula(selectionModel);
    console.log(res);
  }

  useEffect(() => {
    cargarLista();
  }, []);



  return (
    <div style={{ backgroundColor: '#272727', color: 'white', height: '100vh' }} className="App">
      <div style={{ padding: '2rem' }} >
        <h1>Mi lista de Peliculas</h1>
        <p>Andres Moreta Proyecto.</p>
      </div>
      <div style={{ backgroundColor: '#fed766', color: 'black', height: '100vh', paddingTop: '2rem' }} >
        <form >
          <div style={{ padding: '2rem' }}>
            <label >
              Ingresa el nombre de la pelicula<br /><br />
              <input value={peliTitulo} type="text" onChange={e => { setPeliTitulo(e.target.value) }}></input><br /><br />
            </label>
          </div>
          <button style={{ padding: '1em', backgroundColor: '#009fb7', borderStyle:'none' }}
            onClick={(e) => {
              e.preventDefault();
              enviar(e);
              
            }
            }>Agregar</button>
        </form><br />
        <div style={{ paddingTop: '2rem' }}>

          <div>

            <button style={{ padding: '1em', backgroundColor: '#009fb7', borderStyle:'none' }} onClick={() => { window.location.reload(false); }}> Recargar</button>
          </div>

        </div>
        <button type='button'
          style={{
            background: '#FF5061',
            borderRadius: '',
            marginRight:'300em',
            marginTop: '5em',
            padding:'1em'
          }}
          onClick={(e) => { selectionModel != null ? quitarPelicula(e): console.log("error") }}>
          Eliminar
        </button>
        <DataGrid
          rows={listaPelis}
          columns={pelisGrid}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={(rowData) => {
            setSelectionModel(rowData);
          }}
          getRowId={(row) => row.titulo}
          sx={{
            backgroundColor:'#272727',
            color:'white',
            boxShadow: 2,
            border: 2,
            borderColor: 'none',
            '& .MuiDataGrid-cell:hover': {
              color: 'white',
            },
          }}
        />


      </div>
    </div>
  );
}

export default App;
