import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import Thermometer from '../../img/Thermometer.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import Amenazar from '../../img/Words2/Amenazar.png';
import Apodos from '../../img/Words2/Apodos.png';
import Excluir from '../../img/Words2/Excluir.png';
import Golpear from '../../img/Words2/Golpear.png';
import Lastimar from '../../img/Words2/Lastimar.png';
import BP from '../../img/Words2/BromasPesadas.png';
import DC from '../../img/Words2/DestruirCosas.png';
import EC from '../../img/Words2/EsconderCosas.png';
import TPI from '../../img/Words2/TocarPartesIntimas.png';

import styles from './Level2.module.css';


export default function level2(){
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
    return(
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Hp} className={styles.Hp} alt=''/>
            </div>
            <div className={styles.columnContainer}>
                <Words image={Amenazar} targetArea={targetAreas[0]} />
                <Words image={Apodos} targetArea={targetAreas[1]} />
                <Words image={BP} targetArea={targetAreas[2]} />
                <Words image={DC} targetArea={targetAreas[3]} />
                <Words image={EC} targetArea={targetAreas[4]} />
                <Words image={Excluir} targetArea={targetAreas[5]} />
                <Words image={Golpear} targetArea={targetAreas[6]} />
                <Words image={Lastimar} targetArea={targetAreas[7]} />
                <Words image={TPI} targetArea={targetAreas[8]} />
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt=''/>
                </div>
            </div>
            <Kitten/>
        </div>
    )
}