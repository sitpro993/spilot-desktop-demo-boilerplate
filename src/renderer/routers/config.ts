import ROUTE from '@renderer/constants/route';
import HomePage from '@renderer/pages/Home';
import LoginPage from '@renderer/pages/Login';

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
