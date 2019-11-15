import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/Home'
import RandomUsers from '../components/randomUsers'
import NewsTitles from '../components/newsTitles'

const switchRoute = () => {
    return(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/news' component={NewsTitles}/>
        <Route path='/users' component={RandomUsers} />

    </Switch>
    )
}

export default switchRoute