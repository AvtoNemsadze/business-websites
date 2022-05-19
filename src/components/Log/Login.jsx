import React from 'react'
import './login.css'
import SocialIcons from '../home/SocialIcons'


function Login() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="LOGIN" class="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <SocialIcons />
            </div>
          </form>
          
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
            Newlight Technologies is a company based 
            in Irvine, California known for carbon
            sequestration into plastics.
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Learn more
            </button>
          </div>
          <img src="icons/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login;







