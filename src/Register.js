
import './register.css';

function Register() {
    return (
        <>
            <h1>Đây là trang dang ki</h1>
            <label htmlFor="">user name</label>
            <input type="text" id="fname" name="fname" placeholder="user name" />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" id="fname" name="fname" placeholder="password" />
            <br />
            <label htmlFor=""> Xac nhan lai </label>
            <input type="password" id="fname" name="fname" placeholder="password" />
            <br />
            <br />
            <div className="gr-button">
                <button className="bt1">Login</button>
                <button>Register</button>
            </div>
        </>
    );
}

export default Register;
