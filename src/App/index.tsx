import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { ROUTER } from './constants/routeSchema';

export const App: React.FC = () => <RouterProvider router={ROUTER} />;
