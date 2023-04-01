import React from 'react'

import MenuCard, {menuCardProps} from '../components/MenuCard'

import Grid from '@mui/material/Grid';

import routes from '../routes';

const HomePage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Grid container 
                // spacing={4} 
                alignItems="center"
                justifyContent="center"
            >
                {routes.map((route) => {
                    var props:menuCardProps = {
                        path: route.path,
                        element: route.element,
                        name: route.name,
                        description: route.description,
                        imgLink: route.imgLink
                    } 

                    return <MenuCard {...props}/>
                })}
            </Grid>
        </div>
    )
}

export default HomePage