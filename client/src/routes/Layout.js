import React, { Fragment } from 'react'
import { 
  Redirect,
  Route, Switch } from 'react-router'
import Items from '../pages/Items'
import Home from '../pages/Home'
import Share from '../pages/Share'
import ViewerProfile from '../pages/Profile'
import {BrowserRouter as Router, Link } from 'react-router-dom'

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
          <Router>
          {/* <Menu /> */}
          <Switch>
            <Route exact path="/items" component={Items} />
            <Route exact path="/" component={Home} />
            <Route exact path="/share" component={Share} />
            <Route exact path="/profile" component={ViewerProfile} />
            {/* <Route exact path="/profile/:[ID_HERE]" component={UserProfile} /> */}
            <Redirect exact to="/items" />
          </Switch>
          </Router>
  </Fragment>
)
