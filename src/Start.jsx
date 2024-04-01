import { useNavigate } from 'react-router-dom';
import Tittle from './img/Tittle.png';
import Edad from './img/Edad.png';
import './Start.css';
import Btn from './components/Btns/Btn';

function Start() {
  const navigate = useNavigate();

  const toLevel3= () =>{
    navigate("/Level3");
  }
  return (
    <div className="Container">
      <header className="App-header">
        <img src={Tittle} className='Tittle' alt=''/>
        <img src={Edad} className='Edad' alt=''/>
      </header>
      <Btn onClick={toLevel3}/>
    </div>
  );
}

export default Start;
