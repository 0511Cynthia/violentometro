import Tittle from './img/Tittle.png';
import Edad from './img/Edad.png';
import './Start.css';
import Btn from './components/Btns/Btn';

function App() {
  return (
    <div className="Container">
      <header className="App-header">
        <img src={Tittle} className='Tittle' alt=''/>
        <img src={Edad} className='Edad' alt=''/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Btn/>
    </div>
  );
}

export default App;
