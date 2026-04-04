import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { user, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) {
          return <div className="p-5 text-center">Loading...</div>;
        }
        if (!user) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
}
