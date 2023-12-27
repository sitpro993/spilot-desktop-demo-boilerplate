import ROUTE from '../constants/route';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';

export const routes = [
  {
    path: ROUTE.HOME,
    element: HomePage,
    isPrivate: true,
  },
  {
    path: ROUTE.LOGIN,
    element: LoginPage,
  },
];
