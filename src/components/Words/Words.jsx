import { useState } from 'react';
import Mentir from '../../img/Words/Mentir.png'
import styles from './Words.module.css';

export default function Words(){
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    const handleMouseDown = (e) => {
        setDragging(true);
        const initialX = e.clientX - position.x;
        const initialY = e.clientY - position.y;

        const handleMouseMove = (e) => {
        if (dragging) {
            const newX = e.clientX - initialX;
            const newY = e.clientY - initialY;
            setPosition({ x: newX, y: newY });
        }
        };

        const handleMouseUp = () => {
        setDragging(false);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };
    return(
        <div className={styles.Container} style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onMouseDown={handleMouseDown}>
            
            <picture className={styles.containerWord}>
                <img src={Mentir} className={styles.Word} alt=''/>
            </picture>   
            
        </div>
    )
}