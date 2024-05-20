import { useState } from 'react';
import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import Thermometer from '../../img/Thermometer.png';
import Termometro from '../../img/termometro.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import Burlar from '../../img/Words1/Burlarse.png';
import Empujar from '../../img/Words1/Empujar.png';
import Golpear from '../../img/Words1/Golpear.png';
import Pellizcar from '../../img/Words1/Pellizcar.png'; 
import QC from '../../img/Words1/QuitarCosas.png'; 
import styles from './level1.module.css';
// import btnVerificar from '../../components/Verificar/btnVerificar';


function Level1(){
    const targetAreas = [
        {minX: -160, minY: 545, maxX: -150, maxY: 555},
        {minX: -160, minY: 480, maxX: -150, maxY: 490},
        {minX: -160, minY: 425, maxX: -150, maxY: 440},
        {minX: -160, minY: 360, maxX: -150, maxY: 370},
        {minX: -160, minY: 295, maxX: -150, maxY: 325}
    ]

    const [piecesInPlace, setPiecesInPlace] = useState(Array(targetAreas.length).fill(false));
    const [heartVisibility, setHeartVisibility] = useState([true, true, true]);

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

    const checkPiecesPlacement = () => {
        let piecesNotInPlace = 0;
        piecesInPlace.map((piece, index)=>{
            if(piece === true){
                console.log(`La pieza ${index+1} esta esta en su lugar`);
            }else{
                piecesNotInPlace++
            }
        })
        lostALife(piecesNotInPlace);
    }

    const lostALife = (pieces) =>{
        if(pieces>0){
            const firstVisibleHeartIndex = heartVisibility.indexOf(true);
            if (firstVisibleHeartIndex !== -1) {
                toggleHeartVisibility(firstVisibleHeartIndex);
            }
        }
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
            </div>
            <div className={styles.columnContainer}>
                <Words image={Burlar} targetArea={targetAreas[0]} style={{width: "23vmin", height: "4vmin"}}  updatePieceStatus={updatePieceStatus} index={0}/>
                <Words image={Empujar} targetArea={targetAreas[1]} style={{width: "23vmin", height: "5.2vmin"}} updatePieceStatus={updatePieceStatus} index={1}/>
                <Words image={Golpear} targetArea={targetAreas[2]}  style={{width: "20.8vmin", height: "5.2vmin"}} updatePieceStatus={updatePieceStatus} index={2}/>
                <Words image={Pellizcar} targetArea={targetAreas[3]} style={{width: "23vmin", height: "4vmin"}} updatePieceStatus={updatePieceStatus} index={3}/>
                <Words image={QC} targetArea={targetAreas[4]} style={{width: "19.5vmin", height: "9vmin"}} updatePieceStatus={updatePieceStatus} index={4}/>
                <div className={styles.imgContainer}>
                    <img src={Termometro} className={styles.Thermometer} alt=''/>
                </div>
            </div>
            <Kitten/>
        </div>
    )
}

export default Level1;