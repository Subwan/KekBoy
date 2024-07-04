import { createBrowserRouter } from 'react-router-dom';

// EmptyScreen временно тут
import { EmptyScreen } from './components/EmptyScreen';
import { StartPage } from './pages';

export const ROUTER = createBrowserRouter([
  {
    element: <StartPage />,
    children: [
      {
        path: '/',
        element: <EmptyScreen />,
      },
    ],
  },
]);
