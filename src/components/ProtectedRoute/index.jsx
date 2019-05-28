import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {userToken} from '../../state/utils'

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        userToken ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
