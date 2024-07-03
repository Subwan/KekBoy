import { createBrowserRouter } from 'react-router-dom';

import { StartPage } from './pages';

export const ROUTER = createBrowserRouter([
  {
    element: <StartPage />,
    children: [
      {
        path: '/',
        element: 'Please Stand By...',
      },
    ],
  },
]);
