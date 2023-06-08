import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import { ProtectedRoute } from './ProtectedRoute';

export const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: '/service',
      element: <div>Service</div>,
    },
    {
      path: '/about-us',
      element: <div>About Us</div>,
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <div>Home Page</div>,
    },
    {
      path: '/login',
      element: <div>Login</div>,
    },
  ];
  
  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <div>User Home Page</div>,
        },
        {
          path: '/profile',
          element: <div>User Profile</div>,
        },
        {
          path: '/logout',
          element: <div>Logout</div>,
        },
      ],
    },
  ];
  
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
}
