import React, { useState } from 'react'
import './Style/LoginPage.css'
import MaskGroup from '../assets/images/MaskGroup.png'
import { useNavigate } from 'react-router'
import axios from 'axios';
import { RxScissors } from 'react-icons/rx';

const LoginPage = () => {

    const navigation = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = (e) => {
        (setEmail(e.target.value))
    }

    const changePassword = (i) => {
        (setPassword(i.target.value))
    }

    const submitForm = () => {
        const fached = {
            email: email,
            password: password
        }

        axios.post('https://api.wiseskulls.com/api/user/login', fached)
            .then((response) => {
                alert(response.data.message)
                navigation('/dashboard')
            })
            .catch((error) => { alert(error.response.data.message) })
    }

    return (
        <div className='back-img' title='Confirm to Delete Created By Sharif'>
            <div className='login-form'>
                <div className='logo-input' >
                    <img src={MaskGroup} alt="" />
                    <p>CANDIDATES' DETAIL FORM</p>
                </div>
                <div className='input-details'>
                    <div className='sign-enter' >
                        <div className='email-enter' >
                            <h3>Sign In</h3>
                            <input type="email" onChange={changeEmail} placeholder='Email' />
                            <input type="Password" onChange={changePassword} placeholder='Password' />
                        </div>
                        <div className='remember-me' >
                            <span><input type="checkbox" /></span>
                            <p>Remember Me</p>
                        </div>
                        <div className='signto-press' >
                            <button onClick={submitForm} >  Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
