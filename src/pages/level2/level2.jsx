import Heart from '../../img/Heart.png';
import Hp from '../../img/Hp.png';
import styles from './Level3.module.css';
import Thermometer from '../../img/Thermometer.png';
import Kitten from '../../components/Kitten/Kitten';
import Words from '../../components/Words/Words';

export default function level2(){
    return(
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                <img src={Heart} className={styles.Heart} style={{width: "15vh", height: "15vh"}} alt=''/>
                <img src={Hp} className={styles.Hp} alt=''/>
            </div>
            <div className={styles.columnContainer}>
                <Words 
                    // image={} 
                    //targetArea={targetAreas[0]}
                    />
           
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt=''/>
                </div>
            </div>
            <Kitten/>
        </div>
    )
}