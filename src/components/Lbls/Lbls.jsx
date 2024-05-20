import styles from './Lbls.module.css';
import cuadro from '../../img/Cuadro.png';

export default function Lbls(style){
    return(
        <div className={styles.Container}>
                <img className={styles.label} src={cuadro} style={style} alt=''/>
        </div>
    )
}