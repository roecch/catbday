import { FaHome } from "react-icons/fa"
import "./index.css"
import { useNavigate } from "react-router-dom";
function P2() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };
    return(
        <div>
        <div className="puzz">
            <img id="nonogram" src="images/Screenshot 2024-02-14 225743.png"></img>
        </div>
            <FaHome className="home-icon" size={20} onClick={navigateToHome}></FaHome>
        </div>
    )
}
export default P2