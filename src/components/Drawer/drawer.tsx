import * as React from 'react'
import { Route, NavLink } from 'react-router-dom'

import './drawer.sass'

interface DrawerPropos {
    drawer: any
}

class Drawer extends React.Component<DrawerPropos, {}> {

    render(){
        return(
            <div className="drawer">
                <ul>
                    {
                        this.props.drawer.map((i: any) => (
                            <li key={i.id}>
                                <NavLink className="drawer-nav" to={`/list/${i.id}`}>{i.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Drawer