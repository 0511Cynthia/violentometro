// AudioButton1.js
import React, { useRef, useState } from 'react';
import styles from './música.module.css'

const Instructions = ({ audioSrc, label }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className={styles.container}>
      <audio ref={audioRef} loop>
        <source src={audioSrc} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <button onClick={toggleAudio} className={styles.btn}>
        {isPlaying ? 'Detener' : label}
      </button>
    </div>
  );
}

export default Instructions;
