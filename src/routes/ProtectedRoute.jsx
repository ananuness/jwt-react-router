import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

export const ProtectedRoute = () => {
  const { token } = useAuth();

  // Check if the user is authenticated
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return <Outlet />
};