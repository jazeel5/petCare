import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function AddPet({ setSidebar, sidebar }) {
    let navigate = useNavigate()
    let initPet = JSON.parse(localStorage.getItem('Pets')) || []

    const [pet, setPet] = useState({
        //for pet
        petcategory: '',
        breedofpet: '',
        genderofpet: '',
        sizeofpet: '',
        aggresiveofpet: '',
        imageofpet: '',
        desc: '',
        // for owner 
        nameofowner: '',
        email: '',
        phone: '',
        address: '',
        country: '',
        pincode: '',

    })

    let newDESC = pet.desc
    console.log('NEWDESC', newDESC)


    const handleChange = (e) => {
        setPet({ ...pet, [e.target.name]: e.target.value })

    }




    const Submit = () => {
        if (!pet.petcategory || !pet.breedofpet || !pet.genderofpet || !pet.sizeofpet || !pet.aggresiveofpet || !pet.imageofpet || !pet.desc || !pet.nameofowner || !pet.email || !pet.address || !pet.country || !pet.pincode || !pet.phone) {
            alert('Something You Missed !!')
        }
        else {
            let UpdatedPet, id;
            if (initPet.length == 0) {
                id = 201;
            } else {
                id = initPet[initPet.length - 1].id + 1

            }
            let newPet = { ...pet, id: id }
            UpdatedPet = [...initPet, newPet]
            console.log(pet, 88888888)
            localStorage.setItem('Pets', JSON.stringify(UpdatedPet))
            navigate('/viewpet')
        }
    }



    useEffect(() => {
        localStorage.setItem('Pets', JSON.stringify(initPet))
    }, [pet])

    return (
        <div className="admin-main-container">
            <Header setSidebar={setSidebar} />

            <div className="Gridcontent">
                {sidebar && (
                    <Sidebar />
                )}
                <div className="mainADD">
                    {/* about Pet form */}
                    <h1 style={{ position: 'relative', left: '20px' }}> Pet Detail</h1>
                    <div className="add-form ">
                        <div>
                            <label htmlFor="">Pet Categaory</label>
                            <TextField name='petcategory' onChange={handleChange} placeholder='Enter Pet Categaory ' />
                        </div>


                        <div className="GridTEXTField">
                            <div>
                                <label htmlFor="">Breed of Pet</label>
                                <TextField name='breedofpet' onChange={handleChange} placeholder='Enter Breed Pet' />
                            </div>
                            <div>
                                <label htmlFor="">Gender of Pet</label>
                                <Select placeholder='Enter Gender of Pet' name='genderofpet' onChange={handleChange} className='select' >
                                    <MenuItem value='Male' >Male</MenuItem>
                                    <MenuItem value='Female' >Female</MenuItem>
                                </Select>
                            </div>

                            <div>
                                <label htmlFor="">Size of Pet</label>
                                <Select name='sizeofpet' className='select' onChange={handleChange}  >
                                    <MenuItem value='Small' >Small</MenuItem>
                                    <MenuItem value='Medium'  >Medium</MenuItem>
                                    <MenuItem value='Big' >Big</MenuItem>
                                </Select>
                            </div>

                            <div>
                                <label htmlFor="">How aggressive Pet is</label>
                                <Select name='aggresiveofpet' className='select' onChange={handleChange}  >
                                    <MenuItem value='Low'>Low</MenuItem>
                                    <MenuItem value='Normal'>Normal</MenuItem>
                                    <MenuItem value='High'>High</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="">Image of Pet</label>

                                {/* Suggested placeholder */}
                                <TextField name='imageofpet' onChange={handleChange} placeholder='(go to unsplash website copy image address) for image' />



                            </div>

                            <div>
                                <label htmlFor="">Pet Description</label>
                                <TextField name='desc' onChange={handleChange} placeholder='Enter  Pet Detail' />



                            </div>

                        </div>

                    </div>

                    {/* about Owner form */}
                    <h1 style={{ position: 'relative', left: '20px' }}> Owner Detail</h1>
                    <div className="add-form OwnerForm">



                        <div className="GridTEXTField">
                            <div>
                                <label htmlFor="">Name</label>
                                <TextField name='nameofowner' onChange={handleChange} placeholder='Enter Name' />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <TextField name='email' onChange={handleChange} placeholder='Enter Email ' />
                            </div>
                            <div>
                                <label htmlFor="">Phone</label>
                                <TextField name='phone' onChange={handleChange} placeholder='Enter Phone Number' />

                            </div>

                            <div>
                                <label htmlFor="">Address</label>
                                <TextField name='address' onChange={handleChange} placeholder='Enter Address' />
                            </div>

                            <div>
                                <label htmlFor="">Country</label>
                                <TextField name='country' onChange={handleChange} placeholder='Enter CountryName ' />

                            </div>
                            <div>
                                <label htmlFor="">Pin Code</label>
                                <TextField name='pincode' onChange={handleChange} placeholder='Enter Pin Code ' />

                            </div>


                        </div>

                    </div>

                    <Button variant='contained' color='success' style={{ margin: '20px 10px' }} onClick={Submit} >Submit</Button>
                </div>

            </div>
        </div>
    )
}
