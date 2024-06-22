import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import styles from './Level3.module.css';
import Thermometer from '../../img/Thermometer.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import Mentir from '../../img/Words3/Mentir.png';
import Celar from '../../img/Words3/Celar.png';
import Stalkear from '../../img/Words3/Stalkear.png';
import Prohibir from '../../img/Words3/prohibir.png';
import Golpear from '../../img/Words3/Golpear.png';
import Sextorcion from '../../img/Words3/Sextorcion.png';
import Amenazar from '../../img/Words3/Amenazar.png';
import Violar from '../../img/Words3/Violar.png';
import Matar from '../../img/Words3/Matar.png';
import BtnVerificar from '../../components/Verificar/btnVerificar';
import Modal from '../../components/Modales/Modales';
import ModalWin from '../../components/Modales/ModalWin';

function Level3() {
    const navigate = useNavigate();

    const words = [
        'Matar', 'Violar', 'Amenazar', 'Sextorción', 'Golpear',
        'Prohibir', 'Stalkear', 'Celar', 'Mentir'
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

    return (
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                {heartVisibility.map((visible, index) => (
                    visible && (
                        <img key={index} src={Heart} className={styles.Heart} style={{ width: "15vh", height: "15vh" }}
                            alt=''
                        />
                    )
                ))}
                <img src={Hp} className={styles.Hp} alt='' />
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
                <Words image={Mentir} id={`word-${1}`} style={{ width: "18vmin", height: "4.5vmin" }} index={0} />
                <Words image={Celar} id={`word-${2}`} style={{ width: "14vmin", height: "4.5vmin" }} index={1} />
                <Words image={Prohibir} id={`word-${4}`} style={{ width: "19.5vmin", height: "4.5vmin" }} index={3} />
                <Words image={Stalkear} id={`word-${3}`} style={{ width: "22vmin", height: "4.5vmin" }} index={2} />
                <Words image={Golpear} id={`word-${5}`} style={{ width: "20.8vmin", height: "5.8vmin" }} index={4} />
                <Words image={Sextorcion} id={`word-${6}`} style={{ width: "28.5vmin", height: "4.2vmin" }} index={5} />
                <Words image={Amenazar} id={`word-${7}`} style={{ width: "23.6vmin", height: "4.5vmin" }} index={6} />
                <Words image={Violar} id={`word-${8}`} style={{ width: "18vmin", height: "4.5vmin" }} index={7} />
                <Words image={Matar} id={`word-${9}`} style={{ width: "18vmin", height: "4.2vmin" }} index={8} />
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt='' />
                </div>
            </div>
            <Kitten />
        </div>
    );
}

export default Level3;
