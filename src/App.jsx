import AuthProvider from './provider/AuthProvider';
import { Routes } from './routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;