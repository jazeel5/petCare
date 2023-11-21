import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import './user.css'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ idValue, setOpen, open }) {



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            About Pet
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            Contact
                        </Button> */}
                    </Toolbar>
                </AppBar>

                <DialogContent>
                    <div className="Grid">
                        <div className='image'>
                            <img src={idValue.imageofpet} alt="No image" />

                        </div>
                        <div className='petdetail'>
                            <h1><span style={{ color: 'grey' }}></span> {idValue.petcategory}</h1>
                            <p><span style={{ color: 'grey' }}>Breed of Pet</span>:  {idValue.breedofpet}</p>
                            <p><span style={{ color: 'grey' }}>Gender of Pet</span>:  {idValue.genderofpet}</p>

                            {/* desc */}
                            <p style={{fontSize:'18px'}}>
                                {idValue.desc}
                            </p>

                        </div>

                    </div>

                    {/* owner detail */}
                    <div className='ownerDetail'>
                        <h1>Owner Detail :</h1>
                        <div className='aboutOwner'>

                            <p><span style={{ color: 'grey' }}>  Name:</span>  {idValue.nameofowner}</p>

                            <p><span style={{ color: 'grey' }}>  <EmailIcon />-</span>  {idValue.email}</p>

                            <p><span style={{ color: 'grey' }}>  < LocalPhoneIcon />-</span>{idValue.phone}</p>

                            <p><span style={{ color: 'grey' }}>   < PlaceIcon />-</span>  {idValue.address} |{idValue.pincode}</p>




                        </div>

                    </div>


                </DialogContent >
            </Dialog >
        </div >
    );
}
