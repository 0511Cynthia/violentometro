import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import Thermometer from '../../img/Thermometer.png';
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
    return(
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Hp} className={styles.Hp} alt=''/>

            </div>
            <div className={styles.columnContainer}>
                <Words image={Burlar} targetArea={targetAreas[0]} style={{width: "45vmin", height: "10vmin"}}/>
                <Words image={Empujar} targetArea={targetAreas[1]} />
                <Words image={Golpear} targetArea={targetAreas[2]} />
                <Words image={Pellizcar} targetArea={targetAreas[3]} />
                <Words image={QC} targetArea={targetAreas[4]} />
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt=''/>
                </div>
            </div>
            <Kitten/>
        </div>
    )
}

export default Level1;