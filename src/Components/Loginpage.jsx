import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom/client';
import "../CSS/loginpage.css";

function LoginPage({
    backgroundColor,
    backgroundImage,
    primaryColor,
    logo,
    loginheadingtext,
    font,
    placeholderUsername,
    placeholderPassword,
    buttonText,
    onSubmit,
    onChange,
    LoginerrorMessage,
    buttonColor,
    termAndConditionsColor,
    redirectUrl,
    additionalFields
}) {
    return (
        <div style={{ backgroundColor, fontFamily: font, color: primaryColor,boxShadow:"3px 2px 20px "+ primaryColor}} className="login-container">
            <div className="img-container">
                <img className="login-img" src={backgroundImage} alt="" />
            </div>
            <div className="form-container">
                <h1 className="main-heading">{loginheadingtext}</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-item">
                        <span className="item-heading">Username:</span>
                        <input className="input-box" style={{borderBottom:"1px solid "+ primaryColor,backgroundColor:backgroundColor}} type="text" placeholder={placeholderUsername} name="username" onChange={onChange} required />
                    </div>
                    <div className="form-item">
                        <span className="item-heading">Password:</span>
                        <input className="input-box" style={{borderBottom:"1px solid "+ primaryColor,backgroundColor:backgroundColor}} type="password" placeholder={placeholderPassword} name="password" onChange={onChange} required />
                    </div>
                    <div className="checkbox-item">
                        <input type="checkbox" required />
                        <span >I agree to all terms and conditions </span>
                        <a style={{color:termAndConditionsColor}} className="term-link" href="/">Term and conditions</a>
                    </div>
                    <div className="links-container">
                        <a className="link" style={{textDecoration:'none',color:primaryColor}} href="/">forget password</a>
                        <a className="link" style={{textDecoration:'none',color:primaryColor}} href="/register">Don't have account</a>
                    </div>
                    {LoginerrorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {LoginerrorMessage}
                        </div>
                    )}
                    <div className="btn-container">
                        <input style={{backgroundColor:buttonColor}} className="submit-btn" type="submit" value={buttonText} />
                    </div>
                </form>
            </div>
        </div>
    );
}

LoginPage.propTypes = {
    loginheadingtext:PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    primaryColor: PropTypes.string,
    logo: PropTypes.string,
    font: PropTypes.string,
    placeholderUsername: PropTypes.string,
    placeholderPassword: PropTypes.string,
    buttonText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    LoginerrorMessage: PropTypes.string,
    redirectUrl: PropTypes.string,
    termAndConditionsColor:PropTypes.string,
    buttonColor:PropTypes.string,
    additionalFields: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool,
    })),
};

LoginPage.defaultProps = {
    loginheadingtext: 'Login',
    backgroundColor: 'black',
    backgroundImage: '',
    primaryColor: '#007bff',
    logo: '',
    font: 'Arial, sans-serif',
    placeholderUsername: 'Username',
    placeholderPassword: 'Password',
    buttonText: 'Login',
    LoginerrorMessage: null,
    redirectUrl: '',
    termAndConditionsColor:'white',
    buttonColor:'white',
    additionalFields: [],
};

export default LoginPage;
