import { createBrowserRouter } from 'react-router-dom';

import { StartPage, StatusPage } from '../pages';
import { ROUTES } from './routes';

export const ROUTER = createBrowserRouter([
  {
    element: <StartPage />,
    children: [
      {
        path: ROUTES.MAIN,
        // Временно начальная страница, возможно её вообще не будет
        element: <StatusPage />,
      },
      {
        path: ROUTES.QUESTIONNAIRE,
        element: 'questionnaire',
      },
    ],
  },
]);
