import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './circle-image.sass'

interface CircleImageProps {
    toPage: string,
    noLook: string,
    imgPath: string
}

class CircleImage extends React.Component<CircleImageProps, {}> {

    render() {
        return(
            <div className='circle-image' style={{ display: this.props.noLook}}>
                <NavLink to={`/${this.props.toPage}`} className="circle" style={{ backgroundImage: this.props.imgPath }} />
            </div>
        )
    }
}

export default CircleImage