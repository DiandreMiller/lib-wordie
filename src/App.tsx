import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import './App.css'
import FOUROFOUR from "./Pages/FOUROFOUR";

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