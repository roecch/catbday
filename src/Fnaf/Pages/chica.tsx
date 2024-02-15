import React from 'react';
import "../index.css"
import { FaArrowLeft, FaArrowRight ,FaHome} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Chica() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };
    const navigateToPrev = () => {
        // 👇️ navigate to /contacts
        navigate('/Fnaf/Bonnie');
      };
    const navigateToNext = () => {
        // 👇️ navigate to /contacts
        navigate('/Fnaf/Freddy');
      };
    
        return (
            <div className={`page-wrap`}>
            <div className="container">
                <div className="content">
                <iframe src="images/Chica.pdf"/>    
                </div>
            </div>
            <FaArrowLeft className="left" size={70} onClick={navigateToPrev}></FaArrowLeft>
            <FaArrowRight className="right" size={70} onClick={navigateToNext}></FaArrowRight>
            <FaHome className="home-icon" size={20} onClick={navigateToHome}></FaHome>
            </div>
        )
}
export default Chica;