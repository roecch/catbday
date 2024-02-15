import React from 'react';
import "../index.css"
import { FaArrowLeft, FaArrowRight ,FaHome} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Foxy() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };
    const navigateToPrev = () => {
        // 👇️ navigate to /contacts
        navigate('/Fnaf/Freddy');
      };
    
        return (
            <div className={`page-wrap`}>
                <div className="container">
                <div className="container">
                    <div className="content">
                    <iframe src="images/Foxy.pdf"/>    
                    </div>
                </div>
                </div>
            <FaArrowLeft className="left" size={70} onClick={navigateToPrev}></FaArrowLeft>
            <FaHome className="home-icon" size={20} onClick={navigateToHome}></FaHome>
            </div>
        )
}
export default Foxy;