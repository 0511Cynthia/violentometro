import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import Termometro from '../../img/termometro.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import Aislar from '../../img/Words1/Aislar.png';
import DC from '../../img/Words1/Destruir cosas.png';
import Golpear from '../../img/Words1/Golpear.png';
import Pellizcar from '../../img/Words1/Pellizcar.png'; 
import Morder from '../../img/Words1/Morder.png'; 
import styles from './level1.module.css';
import BtnVerificar from '../../components/Verificar/btnVerificar';
import Modal from '../../components/Modales/ModalLose';
import ModalWin from '../../components/Modales/ModalWin';

function Level1(){
    const navigate = useNavigate();
    const words = [
        'Golpear', 'Pellizcar', 'Morder', 'Destruir Cosas', 'Aislar'
    ];

    const [heartVisibility, setHeartVisibility] = useState([true, true, true]);
    const [open, setOpen] = useState(false);
    const [openWin, setOpenWin] = useState(false);
    const [inputWords, setInputWords] = useState(Array(words.length).fill(''));

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
        inputWords.forEach((inputWord, index) => {
            if (inputWord.trim().toLowerCase() === words[index].toLowerCase()) {
                console.log(`El input ${index + 1} contiene la palabra correcta: ${inputWord}`);
            } else {
                piecesNotInPlace++;
            }
        });
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
        navigate("/")
    }

    return(
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                {heartVisibility.map((visible, index) => (
                        visible && (
                            <img
                                key={index}
                                src={Heart}
                                className={styles.Heart}
                                style={{width: "15vh", height: "15vh"}}
                                alt=''
                            />
                        )
                ))}
                <img src={Hp} className={styles.Hp} alt=''/>
                <BtnVerificar onClick={checkPiecesPlacement} />
            </div>
            <Modal open={open} onClose={toStart} />
            <ModalWin open={openWin} onClose={toStart} />
            <div className={styles.inputsContainer}>
                {words.map((word, index) => (
                    <input
                        key={index}
                        type="text"
                        value={inputWords[index]}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder='Escribe aquí'
                    />
                ))}
            </div>
            <div className={styles.columnContainer}>
                <Words image={Aislar} style={{width: "20vmin", height: "5.5vmin"}} index={0}/>
                <Words image={DC} style={{width: "35vmin", height: "5.5vmin"}} index={1}/>
                <Words image={Golpear} style={{width: "25.2vmin", height: "6.5vmin"}} index={2}/>
                <Words image={Pellizcar} style={{width: "26vmin", height: "6.5vmin"}} index={3}/>
                <Words image={Morder} style={{width: "19.5vmin", height: "6vmin"}} index={4}/>
                <div className={styles.imgContainer}>
                    <img src={Termometro} className={styles.Thermometer} alt=''/>
                </div>
            </div>
            <Kitten/>
        </div>
    )
}

export default Level1;