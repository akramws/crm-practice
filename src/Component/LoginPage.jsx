import React from 'react'
import './Style/LoginPage.css'
import MaskGroup from '../assets/images/MaskGroup.png'
import { useNavigate } from 'react-router'

const LoginPage = () => {

    const navigation = useNavigate();
    return (
        <div className='back-img'>
            <div className='login-form'>
                <div className='logo-input' >
                    <img src={MaskGroup} alt="" />
                    <p>CANDIDATES' DETAIL FORM</p>
                </div>
                <div className='input-details'>
                    <div className='sign-enter' >
                        <div className='email-enter' >
                            <h3>Sign In</h3>
                            <input type="email" placeholder='Email' />
                            <input type="Password" placeholder='Password' />
                        </div>
                        <div className='remember-me' >
                            <span><input type="checkbox" /></span>
                            <p>Remember Me</p>
                        </div>
                        <div className='signto-press' >
                            <button onClick={()=>{navigation("/dashboard")}} >  Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
