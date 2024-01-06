import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import './Auth.css'
import { signup,login } from '../../actions/auth'


const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isSignUp, setIsSignUp] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSwitch = () => {
        setIsSignUp(isSignUp => !isSignUp)
        setName("");
        setEmail("");
        setPassword("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log({name,email,password})
        if (!email || !password) {
            toast.error('Plz fill all the fields')
        }
        if (isSignUp) {
            if (!name)
            {
                toast.error('Enter a name to continue')
            }
            dispatch(signup({ name, email, password }, navigate))
        
        }
        else {
            dispatch(login({ email, password }, navigate))
        }
        
    }
    return (
        <div>
            <section className='auth_section'>
                {isSignUp && <AboutAuth />}
                <div className="auth_container_2">
                    {!isSignUp && <img src={icon} alt='stack_overflow' className='login_logo' />}
                    <form onSubmit={handleSubmit}>
                        {
                            isSignUp && (<label className='form_label_input' htmlFor='name'>
                                <h4>Display Name</h4>
                                <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} />
                            </label>)
                        }

                        <label className='form_label_input' htmlFor='email'>
                            <h4>Email</h4>
                            <input type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                        </label>

                        <label className='form_label_input' htmlFor='password'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4>Password</h4>
                                {!isSignUp && <p style={{ color: '#007ac6', fontSize: '13px' }}>Forget Password</p>}
                            </div>
                            <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                            {isSignUp && <p style={{ color: '#666767', fontSize: '13px', marginTop: '10px' }}>Passwords must contain at least eight <br /> characters, including at least 1 letter and 1 <br />number.</p>}
                        </label>
                        {isSignUp &&
                            <label className='form_label_checkbox' htmlFor='check'>
                                <input type='checkbox' id='check' />
                                <p style={{ fontSize: '13px' }}>Opt-in to receive occasional product <br /> updates, user research invitations,<br /> company announcements, and digests.</p>
                            </label>
                        }
                        <button type='submit' className='auth_btn'>
                            {isSignUp ? 'Sign Up' : 'Login'}
                        </button>
                        {isSignUp &&

                            (<>
                                <p style={{ color: '#666767', fontSize: '13px' }}>By clicking “Sign up”, you agree to our
                                    <span style={{ color: '#007ac6', fontSize: '13px' }}> terms of <br />service</span>and acknowledge that you have read and<br /> understand our
                                    code of conduct
                                    <span style={{ color: '#007ac6', fontSize: '13px' }}> privacy policy</span>
                                </p>
                            </>
                            )
                        }
                    </form>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '15px 0px' }}>
                        <p>{isSignUp ? 'Already have an account ?' : 'Don\'t have an account ?'}</p>
                        <button type='button' onClick={handleSwitch} className='handle_switch_btn'>
                            {isSignUp ? 'Log in' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Auth
