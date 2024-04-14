import styles from './Verificar.module.css';
import Verificar from '../../img/Verificar.png';


export default function btnVerificar(checkPiecesPlacement, style){
    return(
        <div className={styles.btnContainer}>
            <button style={style} className={styles.img} onClick={checkPiecesPlacement}>
                <img src={Verificar} className={styles.verificar} alt=''/>
            </button>
        </div>
    )
}