import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import DrawerPage from '@page/Drawer/drawer'
import Retrieval from '@components/Retrieval/retrieval'
import ListContent from '@components/ListContent/list-content'

import P1ImageAPI from '@datep/p1'
import C1ImageAPI from '@datec/c1'

const MainRoute = () => (
    <Switch>
        <Route path="/PRetrieval" render={() => <Retrieval images={P1ImageAPI} />} />
        <Route path="/CRetrieval" render={() => <Retrieval images={C1ImageAPI} />} />
        <Route path="/plant" component={DrawerPage} />
        <Switch>
            <Route path="/list/:id" component={ListContent} />
        </Switch>
        <Route path="/zzchm" component={ListContent} />
    </Switch>
)

export default MainRoute