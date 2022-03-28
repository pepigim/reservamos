import { Box, Button, Card, createStyles, makeStyles, TextField, Theme, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from "redux";
import { showLoading } from '../actions/Ciudades.actions';
import CiudadesResponse from '../models/responses/Ciudades.response';
import { UiActionsEnum } from '../reducers/ui';
//import { makeStyles } from '@material-ui/core/styles';
//import { Box, Card, CardContent, Typography } from '@material-ui/core';


const PronosticoClima = () => {

  const [ciudades, setCiudades] = useState<CiudadesResponse[]>([]);

  const [buscarCiudad, setBuscarCiudad] = useState('')

  const dispatch = useDispatch();

 const getCiudades = async (ciudad: string) => {
        dispatch(showLoading(true));
        const ciudadesResp = await getCiudades(ciudad);
        if(ciudadesResp != null){
          setCiudades(ciudadesResp)
        }
        dispatch(showLoading(false));
 };

  return (
      
        <Card >
           <TextField
                value={buscarCiudad}
                onChange={(e) => setBuscarCiudad(e.target.value)}
                variant="outlined"
                label="Buscar ciudad"
          />

            <Button
                    variant="outlined"
                    color="primary"
                    //className={classes.btnAcciones}
                    onClick={() => getCiudades(buscarCiudad)}
                >
                 Buscar
            </Button>
        </Card>
             
  );
}

export default PronosticoClima;

