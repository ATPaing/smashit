// lib
import { Link } from "react-router-dom";

// logo
import visual_anchor from "../assets/visual_anchor.svg";
import person_icon from "../assets/person_icon.svg";
import email_icon from "../assets/mail_icon.svg";
import password_icon from "../assets/lock_icon.svg";
import confirm_icon from "../assets/confirm_icon.svg";


// components
import SignupInput from "../components/SignupInput";
// import ErrorBox from "../components/ErrorBox";

// css
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="signup_page">
            <div className="signup_container">
                <div className="left_panel">
                    <img src={visual_anchor} alt="Visual Anchor" />
                </div>

                <div className="right_panel">
                    <form>
                        <p className="title">Join the club</p>
                        <p className="subtitle">
                            Step on the court. Manage, play and win.
                        </p>
                        <SignupInput
                            label="FULL Name"
                            icon={person_icon}
                            alt="Person Icon"
                            type="text"
                            placeholder="John Doe"
                        />
                        <SignupInput
                            label="EMAIL"
                            icon={email_icon}
                            alt="Email Icon"
                            type="email"
                            placeholder="john.doe@example.com"
                        />

                        <div className="password_wrapper">
                            <SignupInput
                                label="PASSWORD"
                                icon={password_icon}
                                alt="Password Icon"
                                type="password"
                                placeholder="********"
                            />
                            <SignupInput
                                label="CONFIRM PASSWORD"
                                icon={confirm_icon}
                                alt="Confirm Password Icon"
                                type="password"
                                placeholder="********"
                            />
                        </div>
                        <div className="checkbox_wrapper">
                            <input type="checkbox" id="terms" name="terms" />
                            <label htmlFor="terms">
                                {" "}
                                I agree to the <spam>
                                    Term of Service
                                </spam> and <spam>Privacy Policy</spam>
                            </label>
                        </div>

                        <button type="submit" className="signup_button">
                            Create account
                        </button>
                    </form>
                    {/* <ErrorBox message="Error: Please fill in all fields and agree to the terms." /> */}
                    <div className="login_wrapper">
                        Already have an account? &nbsp;{" "}
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
