import { FaHome } from "react-icons/fa"
import "./index.css"
import { useNavigate } from "react-router-dom";
function P1() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      };
    return(
        <div>
        <div className="puzz">
            <img src="/images/Screenshot 2024-02-14 231711.png"></img><br/>
            hint : use <a href="https://www.dcode.fr/en">www.dcode.fr</a><br/>
            key for 2nd part: birth<br/>
        </div>
            <FaHome className="home-icon" size={20} onClick={navigateToHome}></FaHome>
        </div>
    )
}
export default P1