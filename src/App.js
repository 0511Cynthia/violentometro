import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './Start';
import Level3 from '../src/pages/level3/Level3';
import Level2 from '../src/pages/level2/level2';
import Level1 from '../src/pages/level1/level1';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path='/level3' element={<Level3 />}/>
          <Route path='/level2' element={<Level2 />}/>
          <Route path='/level1' element={<Level1 />}/>
        </Routes>
      </Router>
    );
  }
  
export default App;