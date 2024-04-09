import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Start from './Start';
import Level3 from '../src/pages/level3/Level3';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path='/level3' element={<Level3 />}/>
        </Routes>
      </Router>
    );
  }
  
export default App;