import { createBrowserRouter } from 'react-router-dom';

// EmptyScreen временно тут
import { EmptyScreen } from '../components/EmptyScreen';
import { StartPage } from '../pages';
import { ROUTES } from './routes';

export const ROUTER = createBrowserRouter([
  {
    element: <StartPage />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <EmptyScreen />,
      },
      {
        path: ROUTES.QUESTIONNAIRE,
        element: 'questionnaire',
      },
    ],
  },
]);
