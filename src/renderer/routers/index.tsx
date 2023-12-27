import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './config';
import PrivateRoute from '../components/SdRoute/PrivateRoute';
import PublicRoute from '../components/SdRoute/PublicRoute';

function AppRouter() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const { isPrivate, element: Component } = route;
          const RouteWrapper = isPrivate ? PrivateRoute : PublicRoute;
          return (
            <Route
              key={route.path}
              {...route}
              element={
                <RouteWrapper>
                  <Component />
                </RouteWrapper>
              }
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default AppRouter;
