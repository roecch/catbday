import { useState,useEffect} from "react";
import "./index.css"
import Popup from "reactjs-popup";
import ReactModal from'react-modal';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';
import PasswordChecker from "./PasswordChecker";

function Home() {
    const navigate = useNavigate();
    const navigateToP1= () => {
        // 👇️ navigate to /contacts
        navigate('/P1');
      };
    const navigateToP2= () => {
        // 👇️ navigate to /contacts
        navigate('/P2');
      };
    
    const [giftClicked, setGiftClicked] = useState(false);
    const [open, setOpen] = useState(false);

    return(
    <div className="home">
        <div className="glowing-gift" onClick={() => {setOpen(!open); setGiftClicked(true)}}>
            <img src="/images/kado.png" alt="gift" id="gift-back"/>
            <img src="/images/kado.png" alt="gift" id="gift"/>
        </div>
            Happy Birthday!
            <img src="images/emawh.gif" alt="mwah" id="mwah"/>
        
        {
            giftClicked ? 
            (<div>
                <div id="pw1" onClick={navigateToP1}>
                    Puzzle for Password 1
                </div>
                <div id="pw2" onClick={navigateToP2}>
                    Puzzle for Password 2
                </div>
            </div>) : null
        }
        
        
        <ReactModal isOpen={open} contentLabel="Example Modal" id="modal">
            <CloseButton onClick={() => setOpen(!open)}>X</CloseButton>
            <br/>
            <PasswordChecker/>
      </ReactModal>
    </div>)
}
export default Home