import * as React from "react"
import { NavLink } from 'react-router-dom'

import './home-nav.sass'

interface HomeNavProps {
    navTitle: string,
    toPage: string
}

class HomeNav extends React.Component<HomeNavProps, {}> {

    render(){
        return(
            <NavLink className="home-nav" to={this.props.toPage}>
                {this.props.navTitle}
            </NavLink>
        )
    }
}

export default HomeNav