import AuthController from '@/utils/auth';
import React, {
  Children,
  createContext,
  isValidElement,
  useState,
} from 'react';

const authController = new AuthController(localStorage);

const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
} | null>(null);

function AuthProvider(props: React.PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token: string) => {
    authController.setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    authController.removeToken();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default Object.assign(AuthContext, { Provider: AuthProvider });
