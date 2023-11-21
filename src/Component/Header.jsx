import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './dashboard.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PetsIcon from '@mui/icons-material/Pets';
import VisibilityIcon from '@mui/icons-material/Visibility';


const Header = ({setSidebar, sidebar}) => {
   

    const handleSideBar = () => {
        setSidebar((prev) => !prev)
    }
  
    return (
        <div>
            <div className="navbar">
                <div className="menu">
                    {/* {sidebar && (
                        <CloseIcon onClick={handleSideBar} style={{ fontSize: '40px' }} />
                    )} */}
                    {!sidebar && (
                        <MenuIcon onClick={handleSideBar} style={{ fontSize: '40px' }} />
                    )}
                </div>
                <div className="logo">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.SXQP7dha8fH5jRtU4iAlyAHaHa&pid=Api&P=0&h=180" alt="" />
                </div>
                <div className="header">
                    <h1>Pet Care Hub</h1>
                </div>

                
            </div>

        </div>
    )
}

export default Header; 