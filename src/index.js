import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import './App.css';
import { ClueTwo } from './components/ClueTwo';
import { ClueThree } from './components/ClueThree';
import { ClueFour } from './components/ClueFour';
import { ClueFive } from './components/ClueFive';


ReactDOM.render(
  <React.StrictMode>
    <h1 style={{ display: 'flex', justifyContent: 'center' }}>Xmas Scavenger Hunt 2021</h1>
    <div style={{ padding: '1em', display: 'flex', justifyContent: 'center'}}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/clueTwo' element={<ClueTwo />} />
          <Route path='/clueThree' element={<ClueThree />} />
          <Route path='/clueFour' element={<ClueFour />} />
          <Route path='/clueFive' element={<ClueFive />} />

        </Routes>
      </BrowserRouter>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);
