import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Lose from '../Lose/lose';
import closeIcon from '../../img/goHome.png';  // Asegúrate de actualizar la ruta según tu estructura de carpetas
import agreeIcon from '../../img/tryAgain.png';  // Asegúrate de actualizar la ruta según tu estructura de carpetas
import styles from './Modal.module.css';

export default function Modales({ open, onClose }) {
    return (
        <div className={styles.Container}>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{"Intenta otra vez"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Lose />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} sx={{ minWidth: 'auto', padding: '5px' }} >
                        <img src={closeIcon} alt="Cerrar" style={{ width: '24px', height: '24px' }} />
                    </Button>
                    <Button onClick={onClose} sx={{ minWidth: 'auto', padding: '5px' }} autoFocus>
                        <img src={agreeIcon} alt="Agree" style={{ width: '24px', height: '24px' }} />
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
