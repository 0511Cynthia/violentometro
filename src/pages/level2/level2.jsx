import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import Thermometer from '../../img/Thermometer.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';
import EC from '../../img/Words2/EsconderCosas.png';
import Apodos from '../../img/Words2/Apodos.png';
import Excluir from '../../img/Words2/Excluir.png';
import DC from '../../img/Words2/DestruirCosas.png';
import BP from '../../img/Words2/BromasPesadas.png';
import Amenazar from '../../img/Words2/Amenazar.png';
import Lastimar from '../../img/Words2/Lastimar.png';
import Golpear from '../../img/Words2/Golpear.png';
import TPI from '../../img/Words2/TocarPartesIntimas.png';

import styles from './level2.module.css';

function Level2(){
    const targetAreas = [
        {minX: -170, minY: 545, maxX: -150, maxY: 555},
        {minX: -170, minY: 480, maxX: -150, maxY: 500},
        {minX: -170, minY: 425, maxX: -150, maxY: 435},
        {minX: -170, minY: 355, maxX: -150, maxY: 375},
        {minX: -170, minY: 295, maxX: -150, maxY: 320},
        {minX: -170, minY: 235, maxX: -150, maxY: 260},
        {minX: -170, minY: 180, maxX: -150, maxY: 200},
        {minX: -170, minY: 115, maxX: -150, maxY: 135},
        {minX: -170, minY: 20, maxX: -150, maxY: 55}
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
                <Words image={EC} targetArea={targetAreas[0]} />
                <Words image={Apodos} targetArea={targetAreas[1]} />
                <Words image={Excluir} targetArea={targetAreas[2]} />
                <Words image={DC} targetArea={targetAreas[3]} />
                <Words image={BP} targetArea={targetAreas[4]} />
                <Words image={Amenazar} targetArea={targetAreas[5]} />
                <Words image={Lastimar} targetArea={targetAreas[6]} />
                <Words image={Golpear} targetArea={targetAreas[7]} />
                <Words image={TPI} targetArea={targetAreas[8]} />
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt=''/>
                </div>
            </div>
            <Kitten/>
        </div>
    )
}

export default Level2;