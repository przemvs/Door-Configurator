import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    sessionStorage.getItem('token') || localStorage.getItem('token') ?
      <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
  )}/>
)
