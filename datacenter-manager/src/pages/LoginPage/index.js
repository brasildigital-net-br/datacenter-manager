
import React from  "react";
import "./styles.css";
import logobd from './../../assets/logobrd.svg';
import datacenterimg from './../../assets/dcwp.svg';

function LoginPage() {
  return(
    <div className="container">  
        <div className="container-login">
            <div className="wrap-login">
                <form className="login-form">
                    <span className="login-form-title">Bem vindo</span>
                    <p className="under">ao Data Center Manager</p>
                    <span className="login-form-title">
                      <img src = {logobd}/>  
                    </span>

                    <div className='wrap-input'>
                        <input className="input"type = 'name'/>
                        <span className='focus-input' data-placeholder='Nome'></span>
                    </div>

                    <div className='wrap-input'>
                        <input className="input" type = 'password'/>
                        <span className='focus-input' data-placeholder='Senha'></span>
                    </div>

                    <div className = "container-login-form-btn">
                        <button className="login-form-btn">Login</button>
                    </div>

                    <div></div>

                </form>
            </div>
        </div>
    </div>
 );
};

export default LoginPage;