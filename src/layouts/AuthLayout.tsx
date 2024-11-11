import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('AuthContextError');

  // const { isAuthenticated } = context;

  // if (isAuthenticated) return <Navigate to={'/'} replace />;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Outlet />
    </div>
  );
}
