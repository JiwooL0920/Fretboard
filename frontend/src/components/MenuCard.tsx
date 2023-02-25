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
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image= {props.imgLink}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="black">
                {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    </div>
    );
    
  }

export default MenuCard; 