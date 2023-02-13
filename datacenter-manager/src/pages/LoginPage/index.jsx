
import React from  "react";
import "./styles.css";

const LoginPage = () => {
  return(
    <div className="container">
        <div className="container-login">
            <div className="wrap-login">
                <form className="login-form">
                    <span className="login-form-tittle">Bem vindo</span>
                    <span className="login-form-title">
                      {/* insira imagem aqui */}
                    </span>

                    <div className='wrap-input'>
                        <input type = 'name'/>
                        <span className='focus-input' data-placeholder='name'></span>
                    </div>

                    <div className='wrap-input'>
                        <input type = 'password'/>
                        <span className='focus-input' data-placeholder='password'></span>
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