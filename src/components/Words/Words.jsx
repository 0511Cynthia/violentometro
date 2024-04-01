import Mentir from '../../img/Words/Mentir.png'
import styles from './Words.module.css';

export default function Words(){
    return(
        <div className={styles.Container}>
            <picture className={styles.containerWord}>
                <img src={Mentir} className={styles.Word} alt=''/>
            </picture>   
            
        </div>
    )
}