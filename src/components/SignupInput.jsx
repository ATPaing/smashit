// css
import "./SignupInput.css";

const SignupInput = ({ label, icon, alt, type, value, onChange, placeholder }) => {
    return (
        <div className='input_container'>
            <label htmlFor="">{label}</label>
            <div className="input_wrapper">
                <img className='input_icon' src={icon} alt={alt} />
                <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
            </div>
        </div>
    );
}

export default SignupInput;