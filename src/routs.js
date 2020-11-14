import React from 'react'
import {Route, Switch} from 'react-router'
import Phones from '../src/containers/phones/phones'
import Phone from '../src/containers/phone/phone'
import Basket from '../src/containers/basket/Basket'

export default (
    <Switch>
      <Route path="/" component={Phones} exact />
      <Route path='/basket' component={Basket} />
      <Route path="/categories/:id" component={Phones}  />
      <Route path="/phone/:id" component={Phone} />
    </Switch>
  )