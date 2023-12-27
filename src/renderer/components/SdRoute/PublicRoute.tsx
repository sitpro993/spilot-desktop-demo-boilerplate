import React, { PropsWithChildren } from 'react';

function PublicRoute(props: PropsWithChildren) {
  return <div>{props.children}</div>;
}

export default PublicRoute;
