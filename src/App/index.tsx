import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { ROUTER } from './router';

export const App: React.FC = () => <RouterProvider router={ROUTER} />;
