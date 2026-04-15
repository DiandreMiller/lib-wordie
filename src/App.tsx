import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import FOUROFOUR from "./Pages/FOUROFOUR";
import './App.css'

// Todo:

// Login streak, chem facts daily, seo, title, offline function, footer, science logo

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<GamePage />} path='/play' />
          <Route element={<FOUROFOUR />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App