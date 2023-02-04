
import './App.css';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { buscarPelicula, anadirPelicula, listaPeliculas, borrarPelicula } from './components/FachadaPeliculas';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function App() {



  const [peliTitulo, setPeliTitulo] = useState("");
  const [listaPelis, setListaPelis] = useState([{ titulo: 'prueba', anio: 2000 }])
  const [selectionModel, setSelectionModel] = useState();

  const [sinopsis, setSinopsis] = useState("");
  const [poster, setPoster] = useState("");

  const pelisGrid = [{ field: 'titulo', headerName: 'Título', width: '100' },
  { field: 'director', headerName: 'Director', width: '150' },
  { field: 'anio', headerName: 'anio', width: '150' },
  { field: 'genero', headerName: 'genero', width: '150' },
  ]

  const enviar = async (e) => {
    const varjson = await buscarPelicula(peliTitulo);
    anadirPelicula(varjson);

  }

  const buscar = async () => {
    const varjson = await buscarPelicula(peliTitulo);
    setPoster(varjson.Poster);
    setSinopsis(varjson.Plot);
  }

  const cargarLista = async () => {
    let lista = await listaPeliculas();
    setListaPelis(lista);
  }

  const quitarPelicula = async (e) => {
    e.preventDefault();
    const res = await borrarPelicula(selectionModel);
    console.log(res);
  }

  useEffect(() => {
    cargarLista();
  }, []);


  ///Control del mensaje popUp
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   ///Control del mensaje popUp
   const [openEliminar, setOpenEliminar] = React.useState(false);

   const handleClickOpenEliminar = () => {
     setOpenEliminar(true);
   };
 
   const handleCloseEliminar = () => {
     setOpenEliminar(false);
   };

  



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

        </form><br />

        <button style={{ padding: '1em', backgroundColor: '#009fb7', borderStyle: 'none' }}
          onClick={() => {
            // e.preventDefault();
            buscar();
          }
          }>Buscar</button>
        <div>
          <h3>{peliTitulo}</h3>
          <p>{sinopsis}</p>
          <img src={poster} alt="Poster de pelicula" height={300}></img>
        </div>
        <button style={{ padding: '1em', backgroundColor: '#009fb7', borderStyle: 'none' }}
          onClick={() => {
            // e.preventDefault();
            enviar();
            handleClickOpen();
          }
          }>Agregar</button>



        <div style={{ display: "flex" }}>
          <button style={{ padding: '1em', backgroundColor: '#00c04b', borderStyle: 'none', marginTop: '5em', marginRight: '' }} onClick={() => { window.location.reload(false); }}> Recargar</button>
          <button type='button'
            style={{
              background: '#FF5061',
              borderRadius: '',
              marginRight: '',
              borderStyle: 'none',
              marginTop: '5em',
              padding: '1em'
            }}
            onClick={(e) => { selectionModel != null ? quitarPelicula(e) : console.log("error");
            handleClickOpenEliminar();
            }}>
            Eliminar
          </button>
        </div>




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
            backgroundColor: '#272727',
            color: 'white',
            boxShadow: 2,
            border: 2,
            borderColor: 'none',
            '& .MuiDataGrid-cell:hover': {
              color: 'white',
            },
          }}
        />

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Alerta"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Pelicula agregada correctamente
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{handleClose();
            window.location.reload();}} autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>


        <Dialog
          open={openEliminar}
          onClose={handleCloseEliminar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Alerta"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Pelicula eliminada
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{handleCloseEliminar();
            window.location.reload();}} autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>


      </div>
    </div>
  );
}

export default App;
