import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { msgError, showLoading } from '../actions/Ciudades.actions';
import { getCiudadesApi, getWeather } from '../api/ApiCiudades';
import CiudadesResponse from '../models/responses/Ciudades.response';
import { Clima } from '../models/responses/Clima.response';
import ModalClima from './Modal';


const PronosticoClima = () => {

    const [ciudades, setCiudades] = useState<CiudadesResponse[]>([]);

    const [buscarCiudad, setBuscarCiudad] = useState('')

    const [mostrarModal, setMostrarModal] = useState(false)

    const [clima, setClima] = useState<Clima>({} as Clima)

    const dispatch = useDispatch();

    const getCiudades = async (ciudad: string) => {
            dispatch(showLoading(true));
            const ciudadesResp = await getCiudadesApi(ciudad);
            if (ciudadesResp !== null) {
                if (ciudadesResp.length > 0){
                    setCiudades(ciudadesResp)
                }else{
                    dispatch(msgError('No se encontro resultados'))
                }
                
            }
            dispatch(showLoading(false));
    };

    const temperatura = async (lat: string, long: string) => {
        dispatch(showLoading(true));
            const getWeatherResp = await getWeather(lat, long);
            if (Object.keys(getWeatherResp).length > 0){
                setClima(getWeatherResp)
                setMostrarModal(true)
            }
        dispatch(showLoading(false));
    }

    const handleCerrarModal = () => {
        setMostrarModal(false)
    }


    return (
        <>
            <Container>
                {
                    mostrarModal &&
                        <ModalClima clima={clima} handleCerrarModal={handleCerrarModal} />
                }
                <Box>
                    <Typography component="h1" variant="h3">Buscar la ciudad de destino y el pronóstico</Typography>
                </Box>
                <Box sx={{marginTop: 5, textAlign:"center", display: "flex", alignItem:"center", justifyContent: "center"}} >
                    <Box >
                        <TextField
                            value={buscarCiudad}
                            //sx={{height: "60px"}}
                            margin="dense"
                            onChange={(e) => setBuscarCiudad(e.target.value)}
                            variant="outlined"
                            label="Buscar ciudad"
                            size='small'

                        />
                    </Box>
                    
                    <Box sx={{paddingTop:"10px"}}>
                        <Button
                            sx={{marginLeft: "5px"}}
                            variant="outlined"
                            size="small"
                            color="primary"
                            onClick={() => getCiudades(buscarCiudad)}
                        >
                            Buscar
                        </Button>
                    </Box>
                </Box>

                <Grid container spacing={2} alignItems="stretch" sx={{marginTop: 10}}>
                    
                        {
                            ciudades.length > 0 &&
                                ciudades.map((item, index) => (
                                    <Grid item xs={3} key={index}>
                                        <Card sx={{width: '100%', cursor: 'pointer'}} onClick={()=>{temperatura(item.lat, item.long)}}>
                                            <CardContent>
                                                {item.display}
                                            </CardContent>
                                            
                                        </Card>
                                    </Grid>
                                ))
                                
                        }
                         
                </Grid>
            </Container>
        </>
    );
}

export default PronosticoClima;