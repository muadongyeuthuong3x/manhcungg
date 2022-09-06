
import './register.css';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/register");
      }
    return (
        <div>
            <h1>Đây là trang dang nha2222222222222p</h1>
            <label htmlFor="">user name</label>
            <input type="text" id="fname" name="fname" placeholder="user name" />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" id="fname" name="fname" placeholder="password" />
            <br />
            <div className="gr-button">
                <button className="bt1">Login</button>
                <button onClick={handleClick}>Register</button>
            </div>
        </div>
    );
}

export default Login;
