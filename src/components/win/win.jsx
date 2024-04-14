import win from '../../img/Win.gif';
import styles from './win.module.css';

export default function Win(){
    return(
        <div className={styles.Container}>
            <picture className={styles.containerVideo}>
                <img src={win} className={styles.video} alt=''/>
            </picture>
        </div>
    )
}