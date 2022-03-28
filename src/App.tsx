import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, TextField, Button, Box } from '@mui/material';


function App() {
  return (
    <div className="App">
      <h1>Pronóstico del Clima en reservamos</h1>
      <hr/>
      <h3>NO entiendo porque no funcionaaaa</h3>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
         <Card >
           <TextField
                required
                id="outlined-required"
                //value={buscarCiudad}
                //onChange={(e) => setBuscarCiudad(e.target.value)}
                variant="outlined"
                label="Buscar ciudad"
          />

            <Button
                    variant="outlined"
                    color="primary"
                    //className={classes.btnAcciones}
                    //onClick={() => getCiudades(buscarCiudad)}
                >
                 Buscar
            </Button>
        </Card>
      </Box>
    </div>
  );
}

export default App;
