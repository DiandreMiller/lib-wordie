import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<GamePage />} path='/play' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App