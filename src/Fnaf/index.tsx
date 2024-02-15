import "./index.css"
import React, { useRef, useState } from 'react';
import {FaArrowRight,FaHome} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Fnaf() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };
    const navigateToNext = () => {
        navigate('/Fnaf/Bonnie');
      };
    
    return(
        <div className="video-responsive fnaf-vid">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/z5sW8pqDDAQ?title=0&byline=0&portrait=0&transparent=0&autoplay=1&muted=1&loop=1&autopause=0`}
            title="Embedded youtube" 
            allow="autoplay"
            />
            <FaArrowRight className="right" size={70} onClick={navigateToNext}></FaArrowRight>
            <FaHome className="home-icon" size={20} onClick={navigateToHome}></FaHome>
        </div>
    )
}

export default Fnaf