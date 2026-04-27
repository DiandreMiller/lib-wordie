import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";


import HomePage from './Pages/HomePage';
import GamePage from './Pages/GamePage';
import ToMyHeart from "./Pages/ToMyHeart";
import FOUROFOUR from "./Pages/FOUROFOUR";
import ContactPage from "./Pages/ContactPage";
// import GamePageTest from "./Pages/GamePlayTest";
import './App.css'

import Fuse from "fuse.js";

// Todo:

// seo: JSON, title, offline function, footer, 
// beginner, medium, hard check out other word games...
// Give clues 
// Further goals:
// create backend
// finish redirect
// stats after a week, month, year
//add badges when you get 5, 10, 25, 50, 100 etc in a row
// add friends..

// Catch-all near routes
function AliasRouter() {
  const { pathname } = useLocation();

  const redirectIf = (base: string, to: string) => {
      const re = new RegExp(`^/${base}[a-z0-9-]*$`, "i");
      return re.test(pathname) ? <Navigate to={`/${to}`} replace /> : null;
    };

  const hardRedirect = 
    redirectIf("play", "play") ||
    redirectIf("contactus", "contactus") ||
    redirectIf("tomyheart", "tomyheart") 

  if(hardRedirect) {
    return hardRedirect;
  }

  const routeChoices = [
    { path: "/", label: "Home" },
    { path: "/play", label: "Play" },
    { path: "/tomyheart", label: "To My Heart" },
  ];

  const fuse = new Fuse(routeChoices, {
    keys: ['path', 'label'],
    threshold: 0.35,
    ignoreLocation: true,
    includeScore: true,
  });

  const query = pathname.toLowerCase();
  const result = fuse.search(query)[0]; // best match

  console.log('result:', result);

  if(result && result.score != null && result.score < 0.20) {
    return <Navigate to={result.item.path} replace />;
  }

  return <FOUROFOUR />
};


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<GamePage />} path='/play' />
          <Route element={<ContactPage />} path='/contactus' />
          <Route element={<ToMyHeart />} path='/tomyheart' />
          {/* <Route element={<GamePageTest />} path='/test' /> */}
          <Route element={<AliasRouter />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App