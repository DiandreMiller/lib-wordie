import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import FOUROFOUR from "./Pages/FOUROFOUR";
// import GamePageTest from "./Pages/GamePlayTest";
import './App.css'

// Todo:

// fix route paths, fuzzy js for routes and regex, seo: JSON, title, offline function, footer, hints 5 per day max
// Further goals:
// stats after a week, month, year
//add badges when you get 5, 10, 25, 50, 100 etc in a row
// add friends

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