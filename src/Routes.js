import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppliedRoute from './components/AppliedRoute'

import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './containers/NotFound'
import Signup from './containers/Signup'
import NewNote from './containers/NewNote'

export default function Routes ({ appProps }) {
  return (
    <Switch>
      <AppliedRoute appProps={appProps} path='/' exact component={Home} />
      <AppliedRoute appProps={appProps} path='/login' exact component={Login} />
      <AppliedRoute appProps={appProps} path='/signup' exact component={Signup} />
      <AppliedRoute appProps={appProps} path='/notes/new' exact component={NewNote} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  )
}
