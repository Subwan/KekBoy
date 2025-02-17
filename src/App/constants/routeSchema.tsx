import { createBrowserRouter } from 'react-router-dom';

import { MenuPage, StartPage } from '../pages';
import { ROUTES } from './routes';

export const ROUTER = createBrowserRouter([
  {
    element: <StartPage />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MenuPage />,
      },
    ],
  },
]);
