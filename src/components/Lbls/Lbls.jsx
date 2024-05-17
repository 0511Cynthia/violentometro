import styles from './Lbls.module.css';
import cuadro from '../../img/Cuadro.png';

export default function Cuadro(){
    return(
        <div className={styles.Container}>
            <picture>
                <img src={cuadro} alt=''/>
            </picture>
        </div>
    )
}