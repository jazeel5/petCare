import { TextField, Button } from '@mui/material'
import { React, useState, useEffect } from 'react'
import './register.css'
import { Navigate, useNavigate, Link } from 'react-router-dom';

export default function Register() {
    let initreg = JSON.parse(localStorage.getItem('RegisterPet')) || []
    let navigate = useNavigate()


    const [register, setRegister] = useState({
        email: '',
        password: '',
    })
    const [isError, setIsError] = useState(false)


    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
        setIsError(false)
    }

    const Submit = () => {
        let RegisterValue, id;
        if (initreg.length == 0) {
            id = 101
        } else {
            id = initreg[initreg.length - 1].id + 1
        }

        let value = initreg.filter((e) => {
            return e.email == register.email
        })
        console.log('ValueFilterd', value)

        if (value.length > 0) {
            setIsError(true)

        }
        else {
            RegisterValue = { ...register, id: id }
            let updateBook = [...initreg, RegisterValue]
            localStorage.setItem('RegisterPet', JSON.stringify(updateBook))
            navigate('/dashboard')

        }




    }

    useEffect(() => {
        localStorage.setItem('RegisterPet', JSON.stringify(initreg))
    }, [register])

    return (
        <>
            <div className="main-container">



                <div className="Register-container">
                    <form >

                        <h1>Register the Form </h1>
                        <div className='field'>
                            <TextField name='email' onChange={handleChange} placeholder='Enter Your Email' />
                            <br />
                            <br />
                            <span style={{ backgroundColor: 'red' }}>
                                {isError && (
                                    <span style={{ color: 'black' }}><code>email already exists</code></span>
                                )}
                            </span>
                        </div>

                        <div className='field'>
                            <TextField name='password' onChange={handleChange} placeholder='Enter Your Password ' />

                        </div>
                        <Button className='btn' onClick={Submit} >Register</Button>

                        <p className='loginregkey'>Already have an account ? <Link to='/login' style={{ color: 'black' }}>Signin</Link></p>

                    </form>
                </div>



            </div>

        </>
    )
}
