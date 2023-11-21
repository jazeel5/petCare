import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Card from './Card'

export default function ViewPet({ setSidebar, sidebar }) {


    return (
        <div className="admin-main-container">
            <Header setSidebar={setSidebar} />

            <div className="Gridcontent">
                {sidebar && (
                    <Sidebar />
                )}
                <div className="mainView">

                    <h1>All Pet</h1>
                    <hr />
                    <br />
                    <Card />



                </div>
            </div>
        </div>
    )
}
