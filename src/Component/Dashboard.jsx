import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './dashboard.css'

import Header from './Header';
import Sidebar from './Sidebar';



export default function Index({ sidebar, setSidebar }) {
    let navigate = useNavigate()
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('Token')) == null) {
            navigate('/login')
        }
    }, [])

    let Allpet = JSON.parse(localStorage.getItem('Pets'))
    let AllPetLength = Allpet?.length
    console.log('AllPEtLEngth', AllPetLength)


    return (
        <>
            <div className="admin-main-container">
                <Header setSidebar={setSidebar} />

                <div className="Gridcontent">
                    {sidebar && (
                        <Sidebar />
                    )}
                    <div className="main-content">
                        <div className="dashboard-card">
                            <div className='Card'>
                                <h1>Availabel Pet</h1>
                                <h1 style={{ paddingLeft: '20px' }}>{AllPetLength}</h1>

                            </div>
                            <div className='Card'>
                                <h1>Sold Pet</h1>
                                {/* Default */}

                                <h1>0</h1>

                            </div>
                            <div className='Card'>
                                <h1>Liked Pet</h1>
                                {/* Default */}
                                <h1>1</h1>

                            </div>
                        </div>

                        {/* setted defaullty */}
                        <h1 >Most Liked Pet</h1>
                        <div className="petImage">
                            <img style={{width:'100%',borderRadius:'30px'}} src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
