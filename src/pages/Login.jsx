import { useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import { useEffect } from 'react';

export const Login = () => {
  const { updateToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    updateToken('this is a test token');
    navigate('/', { replace: true });
  };

  useEffect(() => {
    setTimeout(() => handleLogin(), 3000);
  });

  return <h1>Login Auth</h1>;
}