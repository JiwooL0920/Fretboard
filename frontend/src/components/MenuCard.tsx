import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

export interface menuCardProps {
    path: string,
    element: JSX.Element,
    name: string,
    description: string
    imgLink: string
}

const MenuCard = (props: menuCardProps) => {
    const navigate = useNavigate(); 

    return (
      <div onClick={() => navigate(props.path)}>
        <Card sx={{ 
            width: 700, 
            height:450, 
            margin:3,
            // display:'flex', 
            // justifyContent:'center',
            boxShadow: 3,
            backgroundColor: '#303233',
        }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                image= {props.imgLink}
            />
            <CardContent>
                <Typography 
                    gutterBottom 
                    component="div" 
                    color="#e7e6e5"
                    fontWeight="bold"
                    fontSize='37px'
                >
                    {props.name}
                </Typography>
                <Typography
                    variant="body1" 
                    color="#e7e6e5"
                    fontWeight="bold"
                    fontSize='23px'
                >
                    {props.description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    </div>
    );
    
  }

export default MenuCard; 