import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth';

const authContext = {
  updateAuth: async () => {},
  authUser: null,
};

const useShopMoreAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  const updateAuth = (authData) => {
    setAuthUser(authData);
    console.log('from mf', authData);
    console.log('updated', authUser);
  };

  return { authUser, updateAuth };
};

const AuthContextProvider = createContext(authContext);
const useAuthContext = () => useContext(AuthContextProvider);
export { useAuthContext, AuthContextProvider, useShopMoreAuth };
