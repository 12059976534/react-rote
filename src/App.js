import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";

import Home from './componen/home/home'
import Header from './partials/header'
import Allblog from './componen/allbloge/allblog'



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allblog" element={<Allblog />} />
      </Routes>
    </>
  )
}

function App() {
  return ( 
    <div>
    <Header/>
    <Router/>
    </div>
  )

}





export default App;
