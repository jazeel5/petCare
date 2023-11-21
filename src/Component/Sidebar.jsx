import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './dashboard.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PetsIcon from '@mui/icons-material/Pets';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';


export default function Sidebar() {
    // let navigate = useNavigate()
    // const LogoutBtn = () => {
    //     localStorage.removeItem('Token')
    //     navigate('/login')
    // }


    return (

        <div>
            <div className="sidebar">
                <div >

                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/dashboard'>
                        <p> <HomeIcon className='icon' />  <span>Home</span></p>
                    </Link>

                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/addpet'>
                        <p> <PetsIcon className='icon' />  <span>Add Pet</span></p>
                    </Link>

                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/viewpet'>
                        <p> <VisibilityIcon className='icon' />  <span>View Pet</span></p>
                    </Link>


                    {/* <Link style={{ color: 'white', textDecoration: 'none' }} >
                        <p style={{ position: 'absolute', bottom: '100px', width: '143px' }} onClick={LogoutBtn}>  <LogoutIcon className='icon' /><span>Logout</span></p>

                    </Link> */}
                </div>
            </div>
        </div>
    )
}
