import React from 'react'

import MenuCard, {menuCardProps} from '../components/MenuCard'
import routes from '../routes';

const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>

            {/* set routes  */}
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
        </div>
    )
}

export default Homepage