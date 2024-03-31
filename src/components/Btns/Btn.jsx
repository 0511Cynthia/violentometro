import btn3 from '../../img/btn3.png';
import Teen from '../../img/Teen.gif';
import styles from './Btn.module.css';

export default function Btn({ onClick }){
    return(
        <div className='Container'>
            <picture className={styles.containerVideo}>
                <img src={Teen} className={styles.video} alt='Teen'/>
            </picture>   

            <div className={styles.btnContainer}>
                <button type="submit" className={styles} onClick={onClick}>                
                    <img src={btn3} className={styles.btn3} alt=''/>
                </button>
            </div>
            
        </div>
    )
}