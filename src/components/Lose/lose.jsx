import styles from'./lose.module.css';
import lose from '../../img/Lose.gif';

export default function Lose(){
    return(
        <div className={styles.Container}>
            <picture>
                <img src={lose} alt=''/>
            </picture>
        </div>
    )
}