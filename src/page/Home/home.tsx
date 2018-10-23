import * as React from 'react'

import HomeNav from '@components/HomeNav/home-nav'
import Header from '@components/Header/header'

import './home.sass'

class Home extends React.Component {
    render() {
        return (
            <div className="container-home">
                <Header />
                <HomeNav navTitle="专业检索" toPage="/PRetrieval" />
                <HomeNav navTitle="普通检索" toPage="/CRetrieval" />
                <HomeNav navTitle="张智超" toPage="/plant" />
                <HomeNav navTitle="张智超" toPage="/zzchm" />
            </div>
        )
    }
}

export default Home