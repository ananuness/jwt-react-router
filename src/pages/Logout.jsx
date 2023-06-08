import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import { useEffect } from 'react';

export const Logout = (props) => {
  const { updateToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    updateToken();
    navigate('/', { replace: true });
  };

  useEffect(() => {
    setTimeout(() => handleLogout(), 3000);
  });


  return <h1 {...props}>Logout Page</h1>;
}