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

    const targetAreas = [
        { minX: -165, minY: 545, maxX: -150, maxY: 560 },
        { minX: -165, minY: 480, maxX: -150, maxY: 490 },
        { minX: -165, minY: 425, maxX: -150, maxY: 440 },
        { minX: -165, minY: 355, maxX: -150, maxY: 370 },
        { minX: -165, minY: 295, maxX: -150, maxY: 325 },
        { minX: -170, minY: 235, maxX: -150, maxY: 260 },
        { minX: -165, minY: 180, maxX: -150, maxY: 200 },
        { minX: -165, minY: 115, maxX: -150, maxY: 135 },
        { minX: -165, minY: 20, maxX: -150, maxY: 50 }
    ];

    const [piecesInPlace, setPiecesInPlace] = useState(Array(targetAreas.length).fill(false));
    const [heartVisibility, setHeartVisibility] = useState([true, true, true]);
    const [kittenVisible, setKittenVisible] = useState(true);
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

    const updatePieceStatus = (index, status) => {
        setPiecesInPlace(prevState => {
            const newState = [...prevState];
            newState[index] = status;
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

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseWin = () => {
        setOpenWin(false);
    };

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
                    />
                ))}
            </div>
            <div className={styles.columnContainer}>
                <Words image={Mentir} targetArea={targetAreas[0]} id={`word-${1}`} style={{ width: "18vmin", height: "4.5vmin" }} updatePieceStatus={updatePieceStatus} index={0} />
                <Words image={Celar} targetArea={targetAreas[1]} id={`word-${2}`} style={{ width: "14vmin", height: "4.5vmin" }} updatePieceStatus={updatePieceStatus} index={1} />
                <Words image={Prohibir} targetArea={targetAreas[3]} id={`word-${4}`} style={{ width: "19.5vmin", height: "4.5vmin" }} updatePieceStatus={updatePieceStatus} index={3} />
                <Words image={Stalkear} targetArea={targetAreas[2]} id={`word-${3}`} style={{ width: "22vmin", height: "4.5vmin" }} updatePieceStatus={updatePieceStatus} index={2} />
                <Words image={Golpear} targetArea={targetAreas[4]} id={`word-${5}`} style={{ width: "20.8vmin", height: "5.8vmin" }} updatePieceStatus={updatePieceStatus} index={4} />
                <Words image={Sextorcion} targetArea={targetAreas[5]} id={`word-${6}`} style={{ width: "28.5vmin", height: "4.2vmin" }} updatePieceStatus={updatePieceStatus} index={5} />
                <Words image={Amenazar} targetArea={targetAreas[6]} id={`word-${7}`} style={{ width: "23.6vmin", height: "4.5vmin" }} updatePieceStatus={updatePieceStatus} index={6} />
                <Words image={Violar} targetArea={targetAreas[7]} id={`word-${8}`} style={{ width: "18vmin", height: "4.5vmin" }} updatePieceStatus={updatePieceStatus} index={7} />
                <Words image={Matar} targetArea={targetAreas[8]} id={`word-${9}`} style={{ width: "18vmin", height: "4.2vmin" }} updatePieceStatus={updatePieceStatus} index={8} />
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt='' />
                </div>
            </div>
            {kittenVisible && <Kitten />}
        </div>
    );
}

export default Level3;
