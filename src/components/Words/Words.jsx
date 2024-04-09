import { useState } from 'react';
import styles from './Words.module.css';

export default function Word({image, targetArea}){
    const area = {minX: -850, minY: 120, maxX: -100, maxY: 450 };
    const initialPositionX = Math.random() * (area.maxX - area.minX) + area.minX;
    const initialPositionY = Math.random() * (area.maxY - area.minY) + area.minY;
    const [position, setPosition] = useState({ x: initialPositionX, y: initialPositionY });
    const [dragging, setDragging] = useState(false);
    const [isInTargetArea, setIsInTargetArea] = useState(false);
    
    const handleMouseDown = (e) => {
        setDragging(true);
        const initialX = e.clientX - position.x;
        const initialY = e.clientY - position.y;

        const handleMouseMove = (e) => {
        if (dragging) {
            const newX = e.clientX - initialX;
            const newY = e.clientY - initialY;
            // setPosition({ x: newX, y: newY });
            console.log("x: "+newX, "y:"+newY);

            if (newX <= -150) {
                setPosition({ x: newX, y: newY });
            }

            const isInArea = (
                newX >= targetArea.minX && newX <= targetArea.maxX &&
                newY >= targetArea.minY && newY <= targetArea.maxY 
            );
            setIsInTargetArea(isInArea);
        }
        };

        const handleMouseUp = () => {
        setDragging(false);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        if (isInTargetArea) {
            console.log('La pieza está en el lugar correcto.');
        }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };
    return(
        <div className={styles.Container} style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onMouseDown={handleMouseDown}>
            
            <picture className={styles.containerWord}>
                <img src={image} className={styles.Word} alt=''/>
            </picture>   
            
        </div>
    )
}