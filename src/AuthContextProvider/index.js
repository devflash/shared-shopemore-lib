import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth';

const authContext = {
  updateAuth: async () => {},
  authUser: null,
};

const useShopMoreAuth = () => {
  const auth = useAuth();
  console.log(auth);
  return { auth };
};

const AuthContextProvider = createContext(authContext);
const useAuthContext = () => useContext(AuthContextProvider);
export { useAuthContext, AuthContextProvider, useShopMoreAuth };
