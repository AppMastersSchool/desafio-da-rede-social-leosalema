import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from '../components/login'
import PostList from '../components/post/postList'
import Profile from '../components/profile'
import PageNFound from '../components/pageNFound'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Login} exact/>
            <Route path='/timeline' component={PostList} />
            <Route path='/profile' component={Profile} />
            <Route path='*' component={PageNFound} />
        </Switch>
    </BrowserRouter>
)