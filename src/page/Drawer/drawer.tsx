import * as React from 'react'

import Header from '@components/Header/header'
import Drawer from '@components/Drawer/drawer'
import drawerDate from '@date/drawer'

import './drawer.sass'

class DrawerPage extends React.Component{
    render(){
        return(
            <div className="drawer-continer">
                <Header/>
                <div className="bor left"><Drawer drawer={drawerDate.allLfet()} /></div>
                <div className="bor middle"><Drawer drawer={drawerDate.allMiddle()} /></div>
                <div className="bor right"><Drawer drawer={drawerDate.allRight()} /></div>
            </div>
        )
    }
}

export default DrawerPage