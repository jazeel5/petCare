import React, { useEffect, useState } from 'react'
import Header from './Header'
import './dashboard.css'
import Sidebar from './Sidebar'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function EditPet({ setSidebar, sidebar }) {

    let params = useParams()
    let navigate = useNavigate()
    const [single, setSingle] = useState({})



    let Allpet = JSON.parse(localStorage.getItem('Pets'))
    console.log(Allpet, 6666666666)

    useEffect(() => {
        setSingle(Object.assign({}, ...(Allpet.filter((e) =>
            e.id == params.id
        ))))
    }, [])

    const handleChange = (e) => {
        setSingle({ ...single, [e.target.name]: e.target.value })
    }

    const Submit = () => {
        if (!single.petcategory || !single.breedofpet || !single.genderofpet || !single.sizeofpet || !single.aggresiveofpet || !single.imageofpet || !single.desc || !single.nameofowner || !single.email || !single.address || !single.country || !single.pincode || !single.phone) {
            alert('Something You Missed !!')
        }
        else {
            console.log('Single', single)
            let index = Allpet.findIndex((e) => e.id == params.id)
            console.log('Index', index)

            Allpet.splice(index, 1, single)

            localStorage.setItem('Pets', JSON.stringify(Allpet))

            setTimeout(() => {
                navigate('/viewpet')
            }, 200)
        }


    }


    return (
        <div className="admin-main-container">
            <Header setSidebar={setSidebar} />

            <div className="Gridcontent">
                {sidebar && (
                    <Sidebar />
                )}
                <div className="mainView">
                    <h1>Edit Pet</h1>
                    <hr />
                    <h1 style={{ position: 'relative', left: '20px' }}> Pet Detail</h1>
                    <div className="add-form ">
                        <div>
                            <label htmlFor="">Pet Categaory</label>
                            <TextField value={single.petcategory} name='petcategory' onChange={handleChange} placeholder='Enter ' />
                        </div>


                        <div className="GridTEXTField">
                            <div>
                                <label htmlFor="">Breed of Pet</label>
                                <TextField value={single.breedofpet} name='breedofpet' onChange={handleChange} placeholder='Enter ' />
                            </div>
                            <div>
                                <label htmlFor="">Gender of Pet</label>

                                <Select name='genderofpet' onChange={handleChange} className='select' value={single?.genderofpet || ''}>

                                    <MenuItem value='Male' >Male</MenuItem>
                                    <MenuItem value='Female' >Female</MenuItem>
                                </Select>



                            </div>

                            <div>
                                <label htmlFor="">Size of Pet</label>
                                <Select value={single?.sizeofpet || ''} name='sizeofpet' className='select' onChange={handleChange}  >
                                    <MenuItem value='Small' >Small</MenuItem>
                                    <MenuItem value='Medium'  >Medium</MenuItem>
                                    <MenuItem value='Big' >Big</MenuItem>
                                </Select>
                            </div>

                            <div>
                                <label htmlFor="">How aggressive Pet is</label>
                                <Select value={single?.aggresiveofpet || ''} name='aggresiveofpet' className='select' onChange={handleChange}  >
                                    <MenuItem value='Low'>Low</MenuItem>
                                    <MenuItem value='Normal'>Normal</MenuItem>
                                    <MenuItem value='High'>High</MenuItem>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="">Image of Pet</label>
                                <TextField value={single.imageofpet} name='imageofpet' onChange={handleChange} placeholder='(go to unsplash website copy image address) for image' />

                            </div>

                            <div>
                                <label htmlFor="">Pet Description</label>
                                <TextField rows={2} multiline={2} style={{ overflow: 'auto', width: '400px' }} value={single.desc} name='desc' onChange={handleChange} placeholder='Enter Detail' />

                            </div>

                        </div>

                    </div>

                    {/* about Owner form */}
                    <h1 style={{ position: 'relative', left: '20px' }}> Owner Detail</h1>
                    <div className="add-form OwnerForm">



                        <div className="GridTEXTField">
                            <div>
                                <label htmlFor="">Name</label>
                                <TextField value={single.nameofowner} name='nameofowner' onChange={handleChange} placeholder='Enter Name' />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <TextField value={single.email} name='email' onChange={handleChange} placeholder='Enter Email ' />
                            </div>
                            <div>
                                <label htmlFor="">Phone</label>
                                <TextField value={single.phone} name='phone' onChange={handleChange} placeholder='Enter Phone Number' />

                            </div>

                            <div>
                                <label htmlFor="">Address</label>
                                <TextField value={single.address} name='address' onChange={handleChange} placeholder='Enter Address' />
                            </div>

                            <div>
                                <label htmlFor="">Country</label>
                                <TextField value={single.country} name='country' onChange={handleChange} placeholder='Enter CountryName ' />

                            </div>
                            <div>
                                <label htmlFor="">Pin Code</label>
                                <TextField value={single.pincode} name='pincode' onChange={handleChange} placeholder='Enter Pin Code ' />

                            </div>


                        </div>

                    </div>

                    <Button variant='contained' color='success' style={{ margin: '20px 10px' }} onClick={Submit} >Submit</Button>
                </div>



            </div>
        </div>
    )
}
