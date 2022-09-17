
import './register.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/register");
      }
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const getDataUser = (event) => {
          setEmail(event.target.value)
      }
      const getDataPassword = (event) => {
          setPassword(event.target.value)
      }
      const login = ()=>{
        const listUser =  JSON.parse(localStorage.getItem('listUser')) || []
        const dataFind = listUser.find(e=> e.email === email && e.password === password)
        if(dataFind){
            navigate("/listuser");
        }else {
            alert("Tài khoản sai ")
        }
      }
    return (
        <div>
            <h1>Đây là trang dang nhap</h1>
            <label htmlFor="">user name</label>
            <input type="text" id="fname" name="fname" placeholder="user name" value={email} onChange={getDataUser} />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" id="fname" name="fname" placeholder="password" value={password} onChange={getDataPassword} />
            <br />
            <div className="gr-button">
                <button className="bt1" onClick={login}>Login</button>
                <button onClick={handleClick}>Register</button>
            </div>
        </div>
    );
}

export default Login;
