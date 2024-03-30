import Heart from '../img/Heart.png'
import styles from './Level3.module.css';

export default function(){
    return(
        <div className={styles.Container}>
             <img src={Heart} className={styles.Heart} alt=''/>
             {/* <img src={} className={}/> */}
        </div>
    )
}