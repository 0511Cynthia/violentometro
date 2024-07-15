import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import Thermometer from '../../img/Thermometer.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import BtnVerificar from '../../components/Verificar/btnVerificar';
import Modal from '../../components/Modales/ModalLose';
import ModalWin from '../../components/Modales/ModalWin';
import styles from './level2.module.css';

import Ignorar from '../../img/Words2/Ignorar.png';
import Apodos from '../../img/Words2/Apodos.png';
import Señalamientos from '../../img/Words2/Señalamientos.png';
import Abandono from '../../img/Words2/Abandono.png';
import BH from '../../img/Words2/Bromas hirientes.png';
import Amenazas from '../../img/Words2/Amenazas.png';
import Acoso from '../../img/Words2/Acoso.png';
import Abuso from '../../img/Words2/Abuso.png';
import VF from '../../img/Words2/Violencia fisica.png';

function Level2() {
    const navigate = useNavigate();

    const words = [
        'Abuso', 'Violencia física', 'Amenazas', 'Acoso', 'Abandono',
        'Bromas hirientes', 'Señalamientos', 'Apodos', 'Ignorars'
    ];

    const [heartVisibility, setHeartVisibility] = useState([true, true, true]);
    const [open, setOpen] = useState(false);
    const [openWin, setOpenWin] = useState(false);
    const [inputWords, setInputWords] = useState(Array(words.length).fill(''));
    const [correctWords, setCorrectWords] = useState(Array(words.length).fill(false));

    const toggleHeartVisibility = (index) => {
        setHeartVisibility(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleInputChange = (index, event) => {
        const newInputWords = [...inputWords];
        newInputWords[index] = event.target.value;
        setInputWords(newInputWords);
    };

    const checkPiecesPlacement = () => {
        let piecesNotInPlace = 0;
        const newCorrectWords = [...correctWords];

        inputWords.forEach((inputWord, index) => {
            if (inputWord.trim().toLowerCase() === words[index].toLowerCase()) {
                newCorrectWords[index] = true;
            } else {
                piecesNotInPlace++;
            }
        });

        setCorrectWords(newCorrectWords);

        if (piecesNotInPlace === 0) {
            setOpenWin(true);
        } else {
            lostALife();
        }
    };

    const lostALife = () => {
        const firstVisibleHeartIndex = heartVisibility.indexOf(true);
        if (firstVisibleHeartIndex !== -1) {
            toggleHeartVisibility(firstVisibleHeartIndex);
        }
        if (heartVisibility.filter(visible => visible).length === 1) {
            setOpen(true);
        }
    };

    const toStart = () => {
        navigate("/");
    };

    return (
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                {heartVisibility.map((visible, index) => (
                    visible && (
                        <img key={index} src={Heart} className={styles.Heart} style={{ width: "15vh", height: "15vh" }} alt='' />
                    )
                ))}
                <img src={Hp} className={styles.Hp} alt='' />
                <BtnVerificar onClick={checkPiecesPlacement} />
            </div>
            <Modal open={open} onClose={toStart} />
            <ModalWin open={openWin} onClose={toStart} />
            <div className={styles.wordsContainer}>
                <div className={styles.column}>
                    <Words image={Apodos} id={`word-2`} style={{ width: "14vmin", height: "5vmin" }} index={1} />
                    <Words image={BH} id={`word-3`} style={{ width: "35vmin", height: "5.5vmin" }} index={2} />
                    <Words image={VF} id={`word-5`} style={{ width: "20.8vmin", height: "5.8vmin" }} index={4} />
                    <Words image={Acoso} id={`word-8`} style={{ width: "16vmin", height: "5vmin" }} index={7} />
                    <Words image={Abuso} id={`word-9`} style={{ width: "20.8vmin", height: "5.8vmin" }} index={8} />
                </div>
                <div className={styles.column}>
                    <Words image={Señalamientos} id={`word-1`} style={{ width: "18vmin", height: "4.5vmin" }} index={0} />
                    <Words image={Ignorar} id={`word-4`} style={{ width: "23vmin", height: "6.2vmin" }} index={3} />
                    <Words image={Amenazas} id={`word-6`} style={{ width: "30.5vmin", height: "6vmin" }} index={5} />
                    <Words image={Abandono} id={`word-7`} style={{ width: "23.6vmin", height: "4.5vmin" }} index={6} />
                </div>
            </div>
            <div className={styles.inputsContainer}>
                {words.map((word, index) => (
                    <input
                        key={index}
                        type="text"
                        value={inputWords[index]}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder='Escribe aquí'
                        disabled={correctWords[index]}
                    />
                ))}
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt='' />
                </div>
            </div>
            <Kitten />
        </div>
    );
}

export default Level2;