import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import ToMyHeart from "./Pages/ToMyHeart";
import FOUROFOUR from "./Pages/FOUROFOUR";
// import GamePageTest from "./Pages/GamePlayTest";
import './App.css'

// Todo:

// fix route paths, fuzzy js for routes and regex, seo: JSON, title, offline function, footer
// Further goals:
// stats after a week, month, year
//add badges when you get 5, 10, 25, 50, 100 etc in a row
// add friends

// Catch-all near routes
// function AliasRouter() {
//   const { pathname } = useLocation();

//   const redirectIf = (base: string, to: string) => {
//       const re = new RegExp(`^/${base}[a-z0-9-]*$`, "i");
//       return re.test(pathname) ? <Navigate to={`/${to}`} replace /> : null;
//     };

//   const hardRedirect = 
//     redirectIf("cart", "cart") ||
//     redirectIf("contactus", "contactus") ||
//     redirectIf("emailsent", "emailsent") ||
//     redirectIf("inventory", "inventory") ||
//     redirectIf("meetjosh&jenna", "meetjosh&jenna");

//   if(hardRedirect) {
//     return hardRedirect;
//   }
// };


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<GamePage />} path='/play' />
          <Route element={<ToMyHeart />} path='/tomyheart' />
          {/* <Route element={<GamePageTest />} path='/test' /> */}
          <Route element={<FOUROFOUR />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App