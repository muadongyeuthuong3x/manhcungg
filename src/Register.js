
import './register.css';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [forgetPassword, setForgetPassword] = useState('')
    const getDataUser = (event) => {
        setEmail(event.target.value)
    }
    const getDataPassword = (event) => {
        setPassword(event.target.value)
    }
    const getDataForgetPassword = (event) => {
        setForgetPassword(event.target.value)
    }
    const saveDataLocal = () => {
        // key listUser
        //	[{"email":"cuong@123","password":"123456"} , {"email":"cuong1@123","password":"123456"}]
        const listUser =  JSON.parse(localStorage.getItem('listUser')) || []
        const dataFind =  listUser.find(e=>e.email === email )
        // check xem tài khoản với email người ta nhập đã tồn tại
        if(dataFind){
            alert("Đã có người đăng kí tài khoản này với email bạn nhập")
        }
        if (password !== forgetPassword) {
            // check cho người nhớ mật khẩu vừa nhập
            alert("2 mật khẩu không trùng nhau ")
        }
        
        else {
            const dataRegister = {
                email,
                password
            }
            listUser.push(dataRegister)
            localStorage.setItem('listUser', JSON.stringify(listUser));
        }
    }
    const navigate = useNavigate();
    const screenLogin  = ()=>{
        navigate("/login/web");
    }
    return (
        <>
            <h1>Đây là trang dang ki</h1>
            <label htmlFor="">user name</label>
            <input type="email" id="fname" name="fname" placeholder="user name" value={email} onChange={getDataUser} />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" id="fname" name="fname" placeholder="password" value={password} onChange={getDataPassword} />
            <br />
            <label htmlFor=""> Xac nhan lai </label>
            <input type="password" id="fname" name="fname" placeholder="password" value={forgetPassword} onChange={getDataForgetPassword} />
            <br />
            <br />
            <div className="gr-button">
                <button className="bt1" onClick={screenLogin}>Login</button>
                <button onClick={saveDataLocal}>Register</button>
            </div>
        </>
    );
}

export default Register;
