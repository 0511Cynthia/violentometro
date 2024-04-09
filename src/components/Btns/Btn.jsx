import styles from './Btn.module.css';

export default function Btn({ onClick, image, button }){
    return(
        <div className='Container'>
            <picture className={styles.containerVideo}>
                <img src={image} className={styles.video} alt='Teen'/>
            </picture>   

            <div className={styles.btnContainer}>
                <button type="submit" className={styles} onClick={onClick}>                
                    <img src={button} className={styles.btn3} alt=''/>
                </button>
            </div>
            
        </div>
    )
}