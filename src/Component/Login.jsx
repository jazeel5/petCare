import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import './register.css'
import { Navigate, useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [login, setLogin] = useState({})
    const [loginError, setLoginError] = useState(false)
    const [success, setSuccess] = useState(false)
    let navigate = useNavigate()


    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
        setLoginError(false)

    }

    const LoginBtn = (e) => {
        e.preventDefault()

        console.log('LoginValue', login)
        let Allregister = JSON.parse(localStorage.getItem('RegisterPet'))
        console.log('AllRegister', Allregister)
        let value = Allregister?.filter((e) => {
            return e.email == login.email && e.password == login.password
        })
        console.log('ValueFilterd', value)
        let LoginToken = value[0]?.id

        if (value?.length > 0) {
            console.log('Login Successfull');
            setSuccess(true)
            navigate('/dashboard')
            localStorage.setItem('Token', JSON.stringify(LoginToken))
        }
        else {
            console.log('incorrect email or password ');
            setLoginError(true)

        }

    }

    return (
        <>
            <div className="main-container">
                <div className="Register-container">
                    <form method='post'>

                        <h1>Login </h1>

                        <div className='field'>
                            <TextField required name='email' onChange={handleChange} type='email' placeholder='Enter Your Email' />
                        </div>

                        <div className='field'>
                            <TextField required name='password' onChange={handleChange} placeholder='Enter Your Password ' />

                        </div>
                        <Button type='submit' className='btn' onClick={LoginBtn}>Login</Button>
                        <br />
                        <br />

                        <span style={{ backgroundColor: 'red' }}>
                            {loginError && (
                                <span style={{ color: 'black' }}><code>incorrect email or password
                                </code></span>
                            )}
                        </span>
                        <span style={{ backgroundColor: 'green' }}>
                            {success && (
                                <span style={{ color: 'black' }}><code>Login successfull
                                </code></span>
                            )}
                        </span>
                        <p className='loginregkey'>Don't have an account ?  <Link to='/register' style={{ color: 'white' }}>Signup</Link></p>

                    </form>
                </div>



            </div>

        </>
    )
}
