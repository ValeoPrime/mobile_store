import React from 'react'
import {Route, Switch} from 'react-router'
import Phones from '../src/containers/phones/phones'
import Phone from '../src/containers/phone/phone'

export default (
    <Switch>
      <Route path="/" component={Phones} exact />
      <Route path="/phone/:id" component={Phone} />
    </Switch>
  )