import { createContext, useContext, useReducer } from 'react';

const initialState = {
  authUser: null,
};
const authContext = createContext({
  authUser: null,
  updateAuth: () => {},
});

const useAuth = () => {
  const [state, dispatch] = useReducer((state, newState) => {
    return {
      ...state,
      ...newState,
    };
  }, initialState);

  const updateAuth = (authData) => dispatch({ authUser: authData });

  return {
    authUser: state.authUser,
    updateAuth,
  };
};

const useAuthContext = () => useContext(authContext);

export { authContext, useAuthContext, useAuth };
