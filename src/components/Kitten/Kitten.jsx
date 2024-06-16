import Cat from '../../img/cat.gif';
import Sign from '../Signs/Sign';
import styles from './Kitten.module.css';

export default function Kitten({ onClick }){
    return(
        <div className={styles.Container}>
            
            <picture className={styles.containerVideo}>
                <img src={Cat} className={styles.video} alt=''/>
            </picture>   
            <Sign/>
        </div>
    )
}