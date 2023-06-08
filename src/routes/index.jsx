import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import { ProtectedRoute } from './ProtectedRoute';
import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';

export const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: '/service',
      element: <h1>Service</h1>,
    },
    {
      path: '/about-us',
      element: <h1>About Us</h1>,
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <h1>Home Page</h1>,
    },
    {
      path: '/login',
      element: <h1>Login</h1>,
    },
    {
      path: '/login-auth',
      element: <Login />,
    },
  ];
  
  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <h1 className="auth-path">User Home Page</h1>,
        },
        {
          path: '/profile',
          element: <h1 className="auth-path">User Profile</h1>,
        },
        {
          path: '/logout',
          element: <Logout className="auth-path" />,
        },
      ],
    },
  ];
  
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly
  ]);

  return <RouterProvider router={router} />;
}
