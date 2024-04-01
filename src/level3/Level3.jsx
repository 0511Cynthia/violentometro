import Heart from '../img/Heart.png';
import Hp from '../img/Hp.png';
import styles from './Level3.module.css';
import Thermometer from '../img/Thermometer.png';
import Kitten from '../components/Kitten/Kitten';
import Words from '../components/Words/Words';

function Level3(){
    return(
        <div className={styles.Container}>
            <div className={styles.AppHeader}>
                <img src={Heart} className={styles.Heart} alt=''/>
                <img src={Hp} className={styles.Hp} alt=''/>
            </div>
            <Words/>
            <div className={styles.columnContainer}>
                <div className={styles.imgContainer}>
                    <img src={Thermometer} className={styles.Thermometer} alt=''/>
                </div>
                
                <Kitten/>
            </div>
            
        </div>
    )
}

export default Level3;