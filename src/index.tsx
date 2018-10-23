import * as React from "react"
import * as ReactDOM from "react-dom"
import { Route, HashRouter, Switch } from 'react-router-dom'

import Home from '@page/Home/home'
import MainRoute from '@components/MainRoute/main-route'

import './public/sass/base.sass'

ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <MainRoute />
        </Switch>
    </HashRouter>
    ),document.getElementById("root")
)