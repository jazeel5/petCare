import React, { useState } from 'react'
import './user.css'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import DialogForUser from './DialogForUser'

// for Card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function User() {
  let AllPet = JSON.parse(localStorage.getItem('Pets')) || []

  const [pet2, setPet2] = useState(AllPet)

  let [idValue, setIdValue] = useState({})
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('')
  const [nodata, setNodata] = React.useState(false)


  const handleCard = (item) => {
    setOpen(true)
    setIdValue(item)
  }


  const handleChange = (e) => {
    let inputValue = e.target.value
    if (inputValue) {
      let searchData = AllPet.filter((e) => e.petcategory.toLowerCase().includes(inputValue))
      if (searchData.length == 0) {
        setPet2([])
        setNodata(true)
      }
      else {
        setNodata(false)
        setPet2(searchData)
      }
    }
    else {
      setNodata(false)
      setPet2(AllPet)
    }


  }


  return (
    <>
      <div className="user-container">
        <div className="navbar2">
          <div className="logo">
            <img src="https://tse1.mm.bing.net/th?id=OIP.SXQP7dha8fH5jRtU4iAlyAHaHa&pid=Api&P=0&h=180" alt="" />
            <h1 style={{ display: 'inline', position: 'relative', bottom: '10px' }}>Pet Care Hub</h1>
          </div>




        </div>
        <div>
          <div className="sidebar2">
            <div>
              <div className="all-item">
              </div>

            </div>
          </div>
        </div>
        <h1 style={{ textAlign: 'center', color: 'gray' }}>Most Liked Pet</h1>

        <div className='pet'>
          <img src="https://media.istockphoto.com/id/1402117306/photo/adorable-one-year-old-cockapoo.webp?b=1&s=170667a&w=0&k=20&c=mHh4dOIf4jUMEkTtmNJvJN_BmmeIVeZAQ9RsPl1bbOQ=" alt="" />

          <img src="https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

        </div>

        <h1 style={{ textAlign: 'center', color: 'gray' }}>Available Pet</h1>
        <div className="search">
          <SearchIcon className='searchIcon' />
          <TextField placeholder='Search here' onChange={handleChange} />
        </div>


        <div className="AllPet">
          <hr />

          <div className="mapedItem">

            {/* /card */}
            {pet2.map((item, index) => {
              return (
                <>
                  <Card onClick={() => handleCard(item)} sx={{ width: 345, borderRadius: 5 }} style={{ boxShadow: '0 0 14px grey' }}>
                    <CardMedia
                      sx={{ width: '100%', }}
                      component="img"
                      alt="No image"
                      height="240"
                      image={item.imageofpet}
                    />
                    <Typography gutterBottom variant="h5" >
                      {item.petcategory}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="span">
                      Gender:{item.genderofpet}
                    </Typography>

                    <CardActions>

                    </CardActions>
                  </Card >
                </>
              )
            })}


            {nodata && (
              <div className="nodata">
                <img style={{ width: '400px' }} src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg" alt="" />
              </div>
            )}
          </div>

        </div>

      </div >

      {/* Dialog */}
      {
        open && (

          <DialogForUser idValue={idValue} setOpen={setOpen} open={open} />
        )
      }
    </>
  )
}
