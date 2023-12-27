/* eslint-disable react/require-default-props */
import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux';
import ROUTE from '../../constants/route';

function PrivateRoute(props: PropsWithChildren) {
  const isLogin = useAppSelector((s) => s.auth.isLogin);

  if (!isLogin) {
    return <Navigate to={ROUTE.LOGIN} replace />;
  }

  return <div>{props.children}</div>;
}

export default PrivateRoute;
