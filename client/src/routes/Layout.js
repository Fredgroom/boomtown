import React, { Fragment } from 'react'
import { 
  Redirect,
  Route, Switch } from 'react-router'
import {List} from '../pages/Items'
import { Home } from '../pages/Home'
import {Share} from '../pages/Share'
import {Share} from '../pages/Profile'

export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
        <div>
          <Menu />
          <Switch>
            <Route exact path="/items" component={List} />
            <Route exact path="/welcome" component={Home} />
            <Route exact path="/share" component={Share} />
            <Route exact path="/profile" component={ViewerProfile} />
            <Route exact path="/profile/:[ID_HERE]" component={UserProfile} />
            <Redirect exact to="/items" />
          </Switch>
        </div>

    
  </Fragment>
)
