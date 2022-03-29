import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Clima } from '../models/responses/Clima.response';
import { Card, CardContent, Grid } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: 500,
    overflowY: 'auto'
  };

interface ModalClimaProps {
    clima: Clima;
    handleCerrarModal: ()=> void
}

const ModalClima = ({clima, handleCerrarModal}: ModalClimaProps) => {
    const [open, setOpen] = React.useState(true);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleCerrarModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography component="h6" variant="h6">Clima de los próximos días</Typography>
                    <Grid container spacing={2}>
                        {
                            clima.daily.map((item, index) => (
                                <Grid item xs={6} key={index}>
                                    <Card>
                                        <CardContent>

                                            <Box sx={{textAlign: 'center'}}>
                                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                                            </Box>

                                            <Typography >
                                                Día {index+1}
                                            </Typography>

                                            <Typography >
                                                <strong>Máxima:</strong> {item.temp.max} °C.
                                            </Typography>

                                            <Typography >
                                                <strong>Mínima:</strong> {item.temp.min} °C.
                                            </Typography>

                                            <Typography >
                                                <strong>En la mañana:</strong> {item.temp.day} °C.
                                            </Typography>

                                            <Typography >
                                                <strong>En la noche:</strong> {item.temp.night} °C.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalClima