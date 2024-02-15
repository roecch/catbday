import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Home from "./Home";
import Fnaf from "./Fnaf";
import OnePiece from "./OnePiece";
import Bonnie from "./Fnaf/Pages/bonnie";
import Chica from "./Fnaf/Pages/chica";
import Freddy from "./Fnaf/Pages/freddy";
import Foxy from "./Fnaf/Pages/foxy";
import Chopper from "./OnePiece/Chopper";
import P2 from "./Puzzles/P2";
import P1 from "./Puzzles/P1";

function App() {
  return (
    <HashRouter>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Fnaf" element={<Fnaf/>}/>
         <Route path="/Fnaf/Bonnie" element={<Bonnie/>}/>
         <Route path="/Fnaf/Chica" element={<Chica/>}/>
         <Route path="/Fnaf/Freddy" element={<Freddy/>}/>
         <Route path="/Fnaf/Foxy" element={<Foxy/>}/>
         <Route path="/OnePiece" element={<OnePiece/>}/>
         <Route path="/OnePiece/Chopper" element={<Chopper/>}/>
         <Route path="/P1" element={<P1/>}/>
         <Route path="/P2" element={<P2/>}/>
        </Routes>
    </HashRouter>
);}

export default App