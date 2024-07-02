import Cat from '../../img/cat.gif';
import Sign from '../Signs/Sign';
import Instructions from '../../components/Instructions/música';
import styles from './Kitten.module.css';

export default function Kitten({ onClick }){
    return(
        <div className={styles.Container}>
            
            <picture className={styles.containerVideo}>
                <img src={Cat} className={styles.video} alt=''/>
            </picture>   
            <Sign/>
            <Instructions 
            // audioSrc={Music1} 
            label="Instrucciones" 
            />
            <Instructions 
            // audioSrc={Music2} 
            label="Advertencias" 
            />
        </div>
    )
}