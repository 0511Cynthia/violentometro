import { useState } from 'react';
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

function Level3(){
    const targetAreas = [
        {minX: -160, minY: 545, maxX: -150, maxY: 555},
        {minX: -160, minY: 480, maxX: -150, maxY: 490},
        {minX: -160, minY: 425, maxX: -150, maxY: 440},
        {minX: -160, minY: 360, maxX: -150, maxY: 370},
        {minX: -160, minY: 295, maxX: -150, maxY: 325},
        {minX: -160, minY: 235, maxX: -150, maxY: 260},
        {minX: -160, minY: 180, maxX: -150, maxY: 200},
        {minX: -160, minY: 115, maxX: -150, maxY: 135},
        {minX: -160, minY: 20, maxX: -150, maxY: 50}
    ]
    const [piecesInPlace, setPiecesInPlace] = useState(Array(targetAreas.length).fill(false));

    const checkPiecesPlacement = () => {
        const newPiecesInPlace = targetAreas.map((area, index) => {
            const piece = document.getElementById(`word-${index}`);
            if (!piece) return false;
            const pieceRect = piece.getBoundingClientRect();
            return (
                pieceRect.left >= area.minX &&
                pieceRect.right <= area.maxX &&
                pieceRect.top >= area.minY &&
                pieceRect.bottom <= area.maxY
            );
        });

        setPiecesInPlace(newPiecesInPlace);

        piecesInPlace.forEach((isInPlace, index) => {
            if (!isInPlace) {
                console.log(`La pieza ${index} no está en su lugar.`);
            }
        });
    };

    return(
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Hp} className={styles.Hp} alt=''/>
                <BtnVerificar onclick={checkPiecesPlacement}/>
            </div>
            <div className={styles.columnContainer}>
                <Words image={Mentir} targetArea={targetAreas[0]} id={`word-${0}`}/>
                <Words image={Celar} targetArea={targetAreas[1]} id={`word-${1}`}/>
                <Words image={Stalkear} targetArea={targetAreas[2]} id={`word-${2}`}/>
                <Words image={Prohibir} targetArea={targetAreas[3]} id={`word-${3}`}/>
                <Words image={Golpear} targetArea={targetAreas[4]} id={`word-${4}`}/>
                <Words image={Sextorcion} targetArea={targetAreas[5]} id={`word-${5}`}/>
                <Words image={Amenazar} targetArea={targetAreas[6]} id={`word-${6}`}/>
                <Words image={Violar} targetArea={targetAreas[7]} id={`word-${7}`}/>
                <Words image={Matar} targetArea={targetAreas[8]} id={`word-${8}`}/>
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt=''/>
                </div>
            </div>
            <Kitten/>
            
        </div>
    )
}

export default Level3;