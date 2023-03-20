import './style.css';
import React, { useState } from 'react';
// import { client } from '../../supabase/client';


const Login = () => {
    const [active, setActive] = useState(false);
    const containerClass = `container ${active ? 'right-panel-active' : ''}`;

    const [email, setEmail] = useState("");

    const handleClick = () => {
        setActive(!active);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // supabase.auth.signInWithOtp({email: 'example@email.com'})

        console.log(email);
    }

    return (
        <div>
            <div className={containerClass} id="container">

                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className='black-text'>Create Account</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className='normal'>Signnn Up</button>
                    </form>
                </div>


                <div className="form-container sign-in-container">
                    <form action="#" onSubmit={handleSubmit}>
                        <h1 className='black-text'>Sign in</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span> */}
                        <input type="email" placeholder="Email" onChange={(email) => setEmail(email.target.value)}/>
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button className='normal'>Iniciar sesion</button>
                    </form>
                </div>


                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={handleClick} className="ghost" id="signIn">Sign Iiiin</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={handleClick} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>


            </div>
            <script src="main.js"></script>
        </div>
    )
}

export default Login