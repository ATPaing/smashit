// lib
import { Link } from "react-router-dom";

// components
import SignupInput from "../components/SignupInput";
// import ErrorBox from "../components/ErrorBox";

// icons
import logo from "../assets/logo.svg";
import email_icon from "../assets/mail_icon.svg";
import password_icon from "../assets/lock_icon.svg";

// css
import "./Login.css";

const Login = () => {
    return (
        <div className="loginpage_container">
            <div className="loginpage_wrapper">
                <img src={logo} alt="Logo" className="logo" />
                <form>
                    <p className="greeting">Welcome back</p>
                    <p className="sub_greeting">
                        Access your management dashboard.
                    </p>
                    <SignupInput
                        label="EMAIL"
                        icon={email_icon}
                        alt="Email Icon"
                        type="email"
                        placeholder="john.doe@example.com"
                    />
                    <SignupInput
                        label="PASSWORD"
                        icon={password_icon}
                        alt="Password Icon"
                        type="password"
                        placeholder="********"
                    />
                    <a href="/fpw" className="forgot_password">
                        Forgot password?
                    </a>
                    <button type="submit" className="login_btn">
                        Login to Dashboard
                    </button>
                </form>
                {/* <ErrorBox message="Error: Please fill in all fields and agree to the terms." /> */}
                <div className="signup_link_wrapper">
                    Don't have an account yet? &nbsp;{" "}
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};
export default Login;
