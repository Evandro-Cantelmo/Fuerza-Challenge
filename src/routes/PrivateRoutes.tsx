import React, { useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { AuthContext } from '../context/AuthContext';

/**
 * @export
 * @component
 * @name PrivateRoute
 *
 * 
 * @description
 * PrivateRoute
 */
function PrivateRoute({ ...rest }: RouteProps) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Route {...rest} /> : <Redirect to="/" />;
}

export default PrivateRoute;
