import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import FOUROFOUR from "./Pages/FOUROFOUR";
// import GamePageTest from "./Pages/GamePlayTest";
import './App.css'

// Todo:

//  show facts even in loss, chem facts daily, seo, title, offline function, footer, turn to an app

// npm install react-confetti

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<GamePage />} path='/play' />
          {/* <Route element={<GamePageTest />} path='/test' /> */}
          <Route element={<FOUROFOUR />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App