import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function MainCard() {

    //for card
    const [expanded, setExpanded] = React.useState(false);
    const [newExpand, setNewexpand] = React.useState(-1)


    const handleExpandClick = (index) => {
        if (newExpand === index) {
            setNewexpand(-1)
        } else {
            setNewexpand(index)
        }

    };

    let AllPet = JSON.parse(localStorage.getItem('Pets'))

    const [pet2, setPet2] = React.useState(AllPet)


    console.log('ALlPet666666', pet2)

    const handleDeleteItem = (item) => {
        console.log('Item', item)
        let value = pet2.filter((e) => {
            return e !== item
        })
        setPet2(value)
        // console.log('AllDAtasss', AllPet);

        console.log('Value', value);

        localStorage.setItem('Pets', JSON.stringify(value))

    }

    const [nodata, setNodata] = React.useState(false)

    let inputValue, searchData;
    const handleChange = (e) => {

        inputValue = e.toLowerCase()

        if (inputValue) {
            searchData = AllPet.filter((e) => e.petcategory.toLowerCase().includes(inputValue))
            if (searchData.length == 0) {
                setPet2([])
                setNodata(true)

            }
            else {
                // console.log('searchData', searchData)
                setPet2(searchData)
                setNodata(false)
            }

        }
        else {
            setPet2(AllPet)
            setNodata(false)

        }


    }




    return (
        <>
            <div className="search">
                <SearchIcon className='searchIcon' />
                <TextField placeholder='Search here' onChange={(e) => handleChange(e.target.value)} />
            </div>
            <br />


            <div className='main-card'>
                {pet2.map((item, index) => {
                    return (
                        <>
                            <div key={index} className='Cards'>
                                <Card sx={{ width: 345, borderRadius: 5 }} style={{ boxShadow: '0 0 14px grey' }}>
                                   

                                    <CardMedia
                                        component="img"
                                        height="294"
                                        image={item.imageofpet}
                                        style={{ width: '100%' }}
                                        alt="No image"
                                    />
                                    <Typography color="text.secondary">
                                        <p style={{ fontSize: '20px', marginLeft: '20px' }}>
                                            {item.petcategory}
                                        </p>

                                    </Typography>
                                    <CardActions disableSpacing >
                                        <IconButton aria-label="edit">
                                            <Link to={`/editpet/${item.id}`}>
                                                <EditIcon style={{ color: 'green' }} />
                                            </Link>
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon style={{ color: 'red' }} onClick={() => handleDeleteItem(item)} />
                                        </IconButton>

                                        <ExpandMore
                                            expand={expanded}
                                            onClick={() => handleExpandClick(index)}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>

                                    <Collapse sx={{ maxHeight: 180 }} style={{ overflow: 'auto' }} in={newExpand === index} timeout="auto" unmountOnExit>
                                        <CardContent>

                                            <Typography paragraph>Description:</Typography>
                                            <p>{item.desc}</p>
                                            <Typography paragraph>Breed of Pet: {item.breedofpet}</Typography>

                                            <Typography paragraph>Owner Detail:</Typography>

                                            <Typography paragraph>
                                                <p> Name: {item.nameofowner}</p>
                                                <p> Email: {item.email}</p>
                                                <p> Phone: {item.phone}</p>
                                                <p> Country: {item.country}</p>
                                                <p> Address: {item.address}</p>
                                                <p> PinCode: {item.pincode}</p>
                                            </Typography>

                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </div>

                        </>
                    )
                })}


            </div>
            {nodata && (
                <div className="nodata">
                    <img style={{ width: '400px' }} src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg" alt="" />
                </div>
            )}

        </>

    );
}
